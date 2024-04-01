/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        telma: ["Telma"],
        inter: ["Inter"],
        ptsans: ["pt-sans-regular"],
        wixmadefor: ["wix-madefor"],
        lato:['lato']
      },
      screens: {
        vsm: '370px',
      },
      // Add any other customizations or extensions here
    },
  },
  plugins: [],
};
