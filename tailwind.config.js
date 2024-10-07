/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: 'hsl(var(--primary))',
      'light-periwinkle': 'hsl(var(--light-periwinkle))',
      'deep-navy': 'hsl(var(--deep-navy))',
      'pure-white': 'hsl(var(--pure-white))',
      'light-gray-blue': 'hsl(var(--light-gray-blue))',
      'dark-navy': 'hsl(var(--dark-navy))',
    },
    fontFamily: {
      'roboto-slab': 'var(--roboto-slab)',
      'kumbh-sans': 'var(--kumbh-sans)',
      'space-mono': 'var(--space-mono',
    },
    extend: {},
  },
  plugins: [],
};
