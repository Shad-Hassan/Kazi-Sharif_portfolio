/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        bangers: "'Bangers',  sans-serif",
        bebas:"'Bebas Neue', sans-serif;",
        kenia: "'Kenia', sans-serif;",
        poppins: "'Poppins', sans-serif;",
        montserratAlt: "'Montserrat Alternates', sans-serif",
      },
      colors:{
        'moon-white':"#f6f6f3",
        'russia-black':"#060607",
        'deep-blue':"#000435",
        'ghost-blue':"#30365D",
        'sat-blue':"#1E1E39",
      },
      
    
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:["light","dark"],
    darkTheme:"dark"
  },
  darkMode:['class','[data-theme="dark"]']
}
