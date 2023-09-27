import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: 'src', replacement: '/src' }],
  },
  build: {
    rollupOptions: {
      external: ['firebaseSDK/**'],
    },
  },
});
