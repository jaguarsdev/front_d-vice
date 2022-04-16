module.exports = {
  content: ["./src/**/*.html"],
  theme: {
  
    extend: {
      fontSize: {
        '4/5xl': '2.5rem',
      },
      container: {
        center: true,
        screens: {
          '2xl': '1440px',
        },
        padding: {
          DEFAULT: '2rem',
          '2xl': '3rem',
        },
      },
    },
  },
  plugins: [],
}


// npx tailwindcss -i ./src/input.css -o ./src/assets/css/style.css --watch