import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    router_motion: ['react-router-dom', 'framer-motion'],
                    three: ['three', '@react-three/fiber', '@react-three/drei']
                }
            }
        }
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
            '@app': '/src/app',
            '@canvas': '/src/canvas',
            '@components': '/src/components',
            '@core': '/src/core',
            '@features': '/src/features',
            '@hooks': '/src/hooks',
            '@routes': '/src/routes',
            '@shaders': '/src/shaders',
            '@utils': '/src/utils',
        }
    },
    server: {
        port: 3000,
    },
});
