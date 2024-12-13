const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}', 'dev/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--sa-background))',
        foreground: 'hsl(var(--sa-foreground))',
      },
      fontFamily: {
        sans: ['var(--sa-font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--sa-font-mono)', ...fontFamily.mono],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  prefix: 'sa-',
};
