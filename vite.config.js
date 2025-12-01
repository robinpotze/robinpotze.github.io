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
                    three: ['three', '@react-three/fiber', '@react-three/drei'],
                    theatre: ['@theatre/core', '@theatre/r3f']
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
            '@core': '/src/core',
            '@features': '/src/features',
            '@hooks': '/src/hooks',
            '@routes': '/src/routes',
            '@shaders': '/src/canvas/shaders',
            '@utils': '/src/utils',
        }
    },
    optimizeDeps: {
        exclude: ['@theatre/studio'],
        include: ['@theatre/core', '@theatre/r3f']
    },
    server: {
        port: 3000,
    },
});
