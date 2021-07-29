import path from "path";
import webpack, { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

interface Env {
  myEnv?: boolean;
}

const MY_BROWSER = { app: ['chrome', '--incognito'] };
const BUILD_DIR = path.resolve(__dirname, 'dist');
const MY_BUILD_DIR = `r:/${path.basename(__dirname)}`;
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];

enum Mode {
  DEV = 'development',
  PROD = 'production',
}

enum Entry {
  APP = 'app',
  REACT = 'react',
}

const isDev = process.env.NODE_ENV === Mode.DEV;
const isProd = process.env.NODE_ENV === Mode.PROD;

export default function getConfig({ myEnv }: Env): Configuration {
  return {
    mode: isDev ? Mode.DEV : Mode.PROD,

    entry: {
      [Entry.APP]: {
        import: "./src/index.tsx",
        dependOn: Entry.REACT,
        filename: `${Entry.APP}.[contenthash].bundle.js`
      },
      [Entry.REACT]: {
        import: ['react', 'react-dom'],
        filename: `vendors/${Entry.REACT}.bundle.js`
      }
    },

    output: {
      path: myEnv ? MY_BUILD_DIR : BUILD_DIR,
      clean: true,
      publicPath: '',
      assetModuleFilename: 'assets/[name].[contenthash][ext]',
    },

    devtool: isProd ? undefined : 'eval-cheap-source-map',

    optimization: isDev
      ? undefined
      : {
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
          hot: true,
          port: 8080,
          open: !myEnv ? true : MY_BROWSER,
          overlay: {
            warnings: true,
            errors: true,
          },
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
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: '@linaria/webpack-loader',
              options: { sourceMap: isDev },
            },
          ],
        },

        {
          test: /\.css$/i,
          exclude: [/node_modules/],
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: isDev },
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
      ...(isDev
        ? [new ReactRefreshWebpackPlugin()]
        : [new CleanWebpackPlugin()]),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new CopyPlugin({
        patterns: [{ from: 'public' }],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].bundle.css',
      }),
    ],
  };
}
