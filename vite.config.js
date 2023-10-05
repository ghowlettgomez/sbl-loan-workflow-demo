import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.xlsx'], // xlsx file should be treated as assets
  plugins: [
    vue(),
    {
      name: 'hex-loader',
      transform(code, id) {
          const [path, query] = id.split('?');
          if (query != 'blob')
              return null;
  
          const data = fs.readFileSync(path);
          const hex = data.toString('hex');

          return `export default '${hex}';`;
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
