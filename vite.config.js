import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

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
    plugins: [react(), glsl()],
    resolve: {
        alias: {
            '@': '/src',
            '@app': '/src/app',
            '@canvas': '/src/canvas',
            '@components': '/src/components',
            '@config': '/src/config',
            '@hooks': '/src/hooks',
            '@routes': '/src/routes',
            '@utils': '/src/utils',
        }
    },
    optimizeDeps: {
        exclude: []
    },
    server: {
        port: 3000,
    },
});
