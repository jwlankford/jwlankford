// https://vite.dev/config/
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // Add this 'base' option for GitHub Pages deployment
  base: process.env.NODE_ENV === 'production'
    ? '/jwlankford/' // <-- REPLACE with your actual GitHub repository name
    : '/', // In development, the base is just '/'

  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});