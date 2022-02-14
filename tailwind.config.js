module.exports = {
    mode: "jit",
    content: [
        "./public/index.html"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
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