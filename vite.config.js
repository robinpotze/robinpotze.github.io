import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    'react-router': ['react-router-dom'],
                    'framer-motion': ['framer-motion'],
                    three: ['three'],
                    'r3f-fiber': ['@react-three/fiber'],
                    'r3f-drei': ['@react-three/drei'],
                    'r3f-postprocessing': ['@react-three/postprocessing']
                }
            }
        },
        // Exclude video files from build (using CDN instead)
        copyPublicDir: true,
        assetsInlineLimit: 0
    },
    publicDir: 'public',
    // Exclude video files from being copied to dist
    assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp', '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.exr', '**/*.glsl'],
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
