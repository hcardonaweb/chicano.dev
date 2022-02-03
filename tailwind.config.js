module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'onyx': '#1A1A1F',
      'onyx-clear': 'rgba(245, 245, 245, 0.05)',
      'pearl': '#F5F5F5',
      'pearl-clear': 'rgba(26, 26, 31, 0.05)',
      'electric-purple': 'rgb(82, 85, 226)',
    },
    extend: {},
  },
  plugins: [
    // function({addCoomponents}) {
    //   addCoomponents({
    //     '.content-wrap ': {
    //       maxWidth: '100%',
    //       '@screen lg':{
    //         maxWidth: '960px',
    //       }
    //     },
    //   })
    // }
  ],
}