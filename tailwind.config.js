/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    fontFamily:{
      'mont':['Montserrat','sans-serif'],
      'manuale':['Manuale', 'sans-serif']
    },

    extend: {
      colors:{
        color:{
          1: "#F8F6E4",
          2: "#399866",
          3: "#111111",
          4: "#FDC137",
          5: "#F8F6E4",
          6: "#FFFFFF",
          7:"#5F5F5F",
          8:"#141414"
        }
      }
    },
  },
  plugins: [
    
  ],
}


