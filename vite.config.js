import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',
    build: {
        outDir: 'dist'
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
            '@app': '/src/app',
            '@components': '/src/components',
            '@deco': '/src/components/decoration',
            '@effects': '/src/components/effects',
            '@features': '/src/components/features',
            '@hooks': '/src/hooks',
            '@routes': '/src/routes',
            '@utils': '/src/utils',
        }
    },
    server: {
        port: 3000,
    },
});
