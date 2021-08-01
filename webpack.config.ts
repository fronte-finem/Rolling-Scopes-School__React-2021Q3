import path from 'path';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

interface Env {
  myEnv?: boolean;
}

const MY_BROWSER = { app: ['chrome', '--incognito'] };
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const MY_BUILD_DIR = path.resolve('r:', path.basename(__dirname));
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];

enum Mode {
  DEV = 'development',
  PROD = 'production',
}

const isDev = process.env.NODE_ENV === Mode.DEV;
const isProd = process.env.NODE_ENV === Mode.PROD;

export default function getConfig({ myEnv }: Env): Configuration {
  const outputPath = myEnv ? MY_BUILD_DIR : BUILD_DIR;

  return {
    mode: isDev ? Mode.DEV : Mode.PROD,

    entry: {
      app: {
        import: [path.resolve(SRC_DIR, 'index.tsx')],
      },
    },

    output: {
      path: outputPath,
      clean: true,
      publicPath: '',
      filename: '[name].[contenthash].bundle.js',
      assetModuleFilename: `assets${path.sep}[name].[contenthash][ext]`,
    },

    optimization: isDev
      ? undefined
      : {
          splitChunks: {
            filename: `vendors${path.sep}[name].bundle.js`,
            cacheGroups: {
              react: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'react',
                chunks: 'all',
              },
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'commons',
                chunks: 'all',
              },
            },
          },
          minimizer: [
            `...`,
            new CssMinimizerPlugin({
              minimizerOptions: {
                preset: [
                  'default',
                  {
                    discardComments: { removeAll: true },
                  },
                ],
              },
            }) as unknown as webpack.WebpackPluginInstance,
          ],
        },

    devServer: isProd
      ? undefined
      : {
          contentBase: false,
          hot: false,
          port: 8080,
          open: !myEnv ? true : MY_BROWSER,
          overlay: false,
        },

    module: {
      rules: [
        {
          test: /\.(jpe?g|png|svg|gif)$/i,
          type: 'asset/resource',
        },

        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },

        {
          test: /\.(ts|js)x?$/i,
          exclude: [/node_modules/],
          include: [/src/],
          use: [
            {
              loader: 'babel-loader',
              options: { sourceMap: true },
            },
            {
              loader: '@linaria/webpack-loader',
              options: { sourceMap: true },
            },
          ],
        },

        {
          test: /\.css$/i,
          exclude: [/node_modules/],
          include: [/src/],
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: EXTENSIONS,
      plugins: [new TsconfigPathsPlugin()],
    },

    plugins: [
      new ESLintWebpackPlugin({
        context: 'src',
        extensions: EXTENSIONS,
        failOnError: true,
        failOnWarning: true,
      }),
      ...(isDev
        ? [
            // new ReactRefreshWebpackPlugin({
            //   overlay: true,
            // }),
          ]
        : [
            new CleanWebpackPlugin({
              cleanStaleWebpackAssets: true,
            }),
          ]),
      new HtmlWebpackPlugin({
        template: path.resolve(SRC_DIR, 'index.html'),
      }),
      new CopyPlugin({
        patterns: [{ from: 'public' }],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].bundle.css',
      }),
      ...(isDev
        ? [
            new webpack.EvalSourceMapDevToolPlugin({
              exclude: 'vendors',
            }),
          ]
        : [
            new webpack.SourceMapDevToolPlugin({
              exclude: 'vendors',
              filename: '[file].map',
            }),
          ]),
    ],

    devtool: false,
  };
}
