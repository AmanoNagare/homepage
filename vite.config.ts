import { defineConfig } from "vite";

export default defineConfig({
    base: '/homepage/',
    build: {
        rollupOptions: {
            input: {
                main: 'docs/index.html',
            },
        },
    },
});