import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Plus Jakarta Sans', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dpi: {
                    navy: '#132B52',
                    'navy-dark': '#0D1E3A',
                    'navy-light': '#1E4073',
                    gold: '#F3BA33',
                    'gold-dark': '#DDA31C',
                    surface: '#F4F6FA',
                    purple: '#6A1B9A',
                },
            },
        },
    },

    daisyui: {
        themes: ['light'],
    },

    plugins: [forms, require('daisyui')],
};
