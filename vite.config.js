import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    publicDir: 'public',
    build: {
        assetsDir: 'public',
        copyPublicDir: true
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'public', // Source folder
                    dest: '.' // Destination folder in dist
                }
            ]
        })
    ]
}) 