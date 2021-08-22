import { defineConfig } from 'vite';
import { LOCAL_OUT_DIR, ENV_PUBLIC_URL } from './vite.config';

export default defineConfig(({ command, mode }) => {
  console.log(command, mode);

  return {
    base: `${ENV_PUBLIC_URL}/`,
    build: {
      outDir: LOCAL_OUT_DIR,
    },
  };
});
