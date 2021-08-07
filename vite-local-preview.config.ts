import { defineConfig } from 'vite';
import { LOCAL_OUT_DIR } from './vite.config';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: LOCAL_OUT_DIR,
    },
  };
});
