import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/tourist',
  plugins: [react()],
  resolve: {
    alias: {
      public: `${__dirname}/public`,
      '@': `${__dirname}/src`,
      '@pages': `${__dirname}/src/pages`
    }
  }
});
