const defaultTheme = require('tailwindcss/defaultTheme')

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        // "./app/**/*.{js,ts,jsx,tsx}",
        // "./pages/**/*.{js,ts,jsx,tsx}",
        // "./components/**/*.{js,ts,jsx,tsx}",

        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
})
