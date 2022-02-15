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
                DEFAULT: "1rem",
                "sm": "3rem",
                "lg": "3.5rem"
            }
        },
        extend: {
            colors: {
                // To be filled from design file soon
            },
            fontFamily: {
                epilogue: ["Epilogue", "sans-serif"]
            }
        }
    }
}