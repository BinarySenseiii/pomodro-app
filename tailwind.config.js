/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab' : ['Roboto Slab', 'sans-serif'],
        'kumbh-sans' : ['Kumbh Sans', 'sans-serif'],
        'space-mono' : ['Space Mono', 'monospace']
      },
      colors: {
        'bg-color' : 'var(--background-color)',
        'orange-timer' : 'var(--orange-timer)',
        'blue-timer' : 'var(--blue-timer)',
        'purple-timer' : 'var(--purple-timer)',
        'font-color' : 'var(--font-color)',
        'ui-components' : 'var(--ui-components)',
        'menu-color' : 'var(--menu-color)',
        'settings-components' : 'var(--setings-components)',
        'gradient-color-1' : 'var(--gradient-color-1)',
        'gradient-color-2' : 'var(--gradient-color-2)'
      }
    },
  },
  plugins: [],
};
