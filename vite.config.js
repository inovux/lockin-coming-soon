import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        cssMinify: true // minifies CSS
    },
    css: {
        postcss: './postcss.config.js'
    }
})
