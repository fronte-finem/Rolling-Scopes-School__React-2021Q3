import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteImagemin from 'vite-plugin-imagemin';
import viteGraphlQl from 'vite2-graphql-plugin';
import eslint from '@rollup/plugin-eslint';

export const OUT_DIR = 'dist/react-routing';
export const LOCAL_MODE = 'localmode';
export const LOCAL_OUT_DIR = resolve('r:', OUT_DIR);

const ENV_PUBLIC_URL = '/react-redux';

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const isLocalMode = mode === LOCAL_MODE;
  const isProd = command === 'build';

  return {
    base: isProd ? `${ENV_PUBLIC_URL}/` : '/',

    define: {
      ENV_PUBLIC_URL: JSON.stringify(isProd ? ENV_PUBLIC_URL : '/'),
      ENV_IS_PROD: isProd,
    },

    clearScreen: false,

    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        root: '.',
      },
      postcss: './postcss.config.js',
    },

    server: {
      force: true,
    },

    build: {
      outDir: isLocalMode ? LOCAL_OUT_DIR : OUT_DIR,
      emptyOutDir: true,
      assetsInlineLimit: 0,
      minify: 'esbuild',
      sourcemap: 'hidden',
      brotliSize: false,
      rollupOptions: {
        output: {
          // assetFileNames: 'assets/[name][extname]',
          // chunkFileNames: 'assets/[name].js',
          // entryFileNames: 'assets/[name].js',
        },
      },
    },

    plugins: [
      {
        ...eslint({
          include: '**/*.+(js|jsx|ts|tsx)',
          throwOnError: true,
          throwOnWarning: true,
        }),
        enforce: 'pre',
      },
      viteGraphlQl(),
      tsconfigPaths(),
      reactRefresh(),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 2,
        },
        optipng: {
          optimizationLevel: 4,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeUselessDefs',
              active: false,
            },
          ],
        },
      }),
    ],
  };
});
