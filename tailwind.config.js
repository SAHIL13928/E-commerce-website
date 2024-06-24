/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class" ,   
  theme: {
    extend: {
      colors :{
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow:"#fdc62e",
        brandGreen: "#22c55e",
        brandBlue: "#3b82f6",
        brandWhite: "#eeeeee",  
        


        
      },
      container:{
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        },
      },

      }
      
    },
  
  plugins: [],
};

