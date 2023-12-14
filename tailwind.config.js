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
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: 'Poppins'
            },
            colors: {
                lightOrange : '#FFEDE2',
                orange: '#E06F2C',
                gray: '#D9D9D9',
                black: '#12141E',
                lightBrown: '#F5EFEF',
                brown: '#704332',
                bg: '#F8F8F8',
                brownText: '#2F1B14',
                grayText: '#707278',
                grayButton: '#F4F4F4',
                
            }
        },
    },

    plugins: [forms, require('tailwind-scrollbar-hide')],
};
