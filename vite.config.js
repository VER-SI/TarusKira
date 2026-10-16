import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import {
    defineConfig
} from 'vite';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});


// import react from '@vitejs/plugin-react';
// import laravel from 'laravel-vite-plugin';
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//     server: {
//         host: '0.0.0.0',
//         port: 5173,

//         // Allow requests from Laravel dev server
//         cors: true,

//         hmr: {
//             host: '10.177.131.231', // your PC IP
//             protocol: 'ws',
//             port: 5173,
//         },
//     },

//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.tsx'],
//             ssr: 'resources/js/ssr.jsx',
//             refresh: true,
//         }),
//         react(),
//         tailwindcss(),
//     ],

//     esbuild: {
//         jsx: 'automatic',
//     },
// });