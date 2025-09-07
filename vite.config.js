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
            '@hooks': '/src/hooks',
            '@interaction': '/src/components/interaction',
            '@navigation': '/src/components/navigation',
            '@routes': '/src/routes',
        }
    },
    server: {
        port: 3000,
    },
});
