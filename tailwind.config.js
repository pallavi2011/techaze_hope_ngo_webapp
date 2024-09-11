/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    fontFamily:{
      'mont':['Montserrat','sans-serif'],
      'manuale':['Manuale', 'sans-serif'],
      'poppins':['Poppins', 'sans-serif']
    },
    fontSize: {
      xs: ['14px', '40px'],
      sm: ['15px', '21px'],
      smm:['16px', '24px'],
      base: ['18px', '21.94px'],
      md: ['20px', '28px'],
      lg:['40px', '40px'],
      xl: ['50px', '50px'],
      xxl: ['70px', '81px']
    },

    extend: {
      colors:{
        color:{
          beige: "#F8F6E4",
          green: "#399866",
          dark: "#111111",
          yellow: "#FDC137",
          light: "#F8F6E4",
          white: "#FFFFFF",
          grey:"#5F5F5F",
          black:"#141414",
          lightgrey:"#E0E0E0"
        }
      }
    },
  },
  plugins: [
    
  ],
}


