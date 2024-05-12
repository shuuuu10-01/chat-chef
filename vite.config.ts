import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['cook.svg'],
      injectRegister: 'auto',
      manifest: {
        name: 'Chat Chef',
        short_name: 'chat-chef',
        description: '食材を選択し、その食材を用いた料理を提案してくれるアプリ',
        theme_color: '#F6AD55',
        background_color: '#FFFFFF',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: 'src', replacement: '/src' }],
  },
  build: {
    rollupOptions: {
      external: ['firebaseSDK/**'],
    },
  },
});
