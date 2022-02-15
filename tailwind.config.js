module.exports = {
    mode: "jit",
    content: [
        "./public/index.html"
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
                "sm": "3rem",
                "lg": "3.5rem"
            }
        },
        extend: {
            colors: {
                "accent": "#EF6D58",
                "dark": "#391400",
                "dark-gray": "rgba(57, 20, 0, 0.64)",
                "light-gray": "rgba(255, 255, 255, 0.64)"
            },
            fontFamily: {
                sans: ["Epilogue", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "'Noto Sans'", "sans-serif", "'Apple Color Emoji'", "'Segoe UI Emoji'", "'Segoe UI Symbol'", "'Noto Color Emoji'"]
            }
        }
    }
}