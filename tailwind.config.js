/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      Ubuntu: ['Ubuntu', 'sans-serif']
    },
    backgroundImage: {
      mobile: 'url(./assets/images/bg-sidebar-mobile.svg)',
      desktop: 'url(./assets/images/bg-sidebar-desktop.svg)'
    },
    extend: {
      colors: {
        'marine-blue': 'hsl(var(--marine-blue))',
        'purpish-blue': 'hsl(var(--purpish-blue))',
        'pastel-blue': 'hsl(var(--pastel-blue))',
        'light-blue': 'hsl(var(--light-blue))',
        'strawberry-red': 'hsl(var(--strawberry-red))',
        'cool-gray': 'hsl(var(--cool-gray))',
        'light-gray': 'hsl(var(--light-gray))',
        magnolia: 'hsl(var(--magnolia))',
        alabaster: 'hsl(var(--alabaster))'
      }
    }
  },
  plugins: []
}
