/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Agbalumo: "Agbalumo",
        exo: "exo",
      },
      backgroundImage: {
        'kuas': "url('../src/asset/img/kuas.png')",
      }
    },
  },
  plugins: [],
}

