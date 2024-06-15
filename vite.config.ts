import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

// // build analysis
// const analysisFilePath = path.join(__dirname, '/analysis.txt');

// if (fs.existsSync(analysisFilePath)) {
//   fs.rmSync(analysisFilePath);
// }
// function appendToFile(line: string) {
//   fs.appendFile(analysisFilePath, line, (err: any) => {
//     if (err) throw err;
//     console.log('Data appended to file');
//   });
// }

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
      map: false
    },
    modules: {
      exportGlobals: true,
      generateScopedName: '[local]_[hash-base64-5]',
      localsConvention: 'camelCase',
      scopeBehaviour: 'local'
    }
  },
  plugins: [vue()],
  server: {
    port: 9080,
    host: '127.0.0.1'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    preserveSymlinks: true
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash-base64-5].[ext]',
        manualChunks: {
          zod: ['zod'],
          'tanstack/table-core': ['@tanstack/table-core'],
          'vee-validate': ['vee-validate'],
          'tailwind-merge': ['tailwind-merge'],
          '@internationalized/date': ['@internationalized/date'],
          'iconify/vue': ['@iconify/vue'],
          lodash: ['lodash']
        }
      },
      external: [],
      plugins: [
        // analyze({ summaryOnly: true, writeTo: (x) => appendToFile(x) }),
        // splitVendorChunkPlugin()
      ]
    }
  }
});
