const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                'xxs': {'max': '268px'},
                'xs': {'max': '931px'},
                ...defaultTheme.screens,
            }
        },
        backgroundImage: {
            'auth-bg': "url('/images/nvit_bg.png')",
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
