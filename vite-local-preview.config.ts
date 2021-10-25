import { defineConfig } from 'vite';
import { ENV_PUBLIC_URL, LOCAL_OUT_DIR } from './vite.config';

export default defineConfig(() => {
  return {
    base: `${ENV_PUBLIC_URL}/`,
    build: {
      outDir: LOCAL_OUT_DIR,
    },
  };
});
