/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.hmtl", "./src/**/*.jsx"
    ],
    theme: {
        extend: {
            colors: {
                'blueLogin': '#0000ED',
                'purpleLogin': '#7D00D2'
            }
        },

    },
    plugins: [],
}