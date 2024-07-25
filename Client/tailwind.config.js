module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C32',
        secondary: '#EBEDF3',
        gry: '#7E7E7E',
        txt: '#323232'
      },

      fontFamily: {
        body:['Oxygen']
      }
    },
    screens: {
      'l': {'max': '1027px'},
      'md': {'max': '911px'},
      'sm': {'max': '476px'},
    },
  },
  plugins: [],
}
