import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                jpg: {
                    quality: 80
                },
                jpeg: {
                    quality: 80
                },
            }),
            handlebars({
                partialDirectory: resolve(__dirname, 'src/layout/'),
            }),
        ],
        css: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    sortMediaQueries({
                        sort: 'mobile-first'
                    })
                ]
            }
        },
    };
});