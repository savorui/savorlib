const { fontFamily } = require('tailwindcss/defaultTheme');
import tailwindConfigBase from '../../tailwind.config.base';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class'],
  // content: ['src/**/*.{ts,tsx}'],
  ...tailwindConfigBase,
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
        border: 'hsl(var(--te-border))',
        input: 'hsl(var(--te-input))',
        ring: 'hsl(var(--te-ring))',
        background: 'hsl(var(--te-background))',
        foreground: 'hsl(var(--te-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--te-primary))',
          foreground: 'hsl(var(--te-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--te-secondary))',
          foreground: 'hsl(var(--te-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--te-destructive) / <alpha-value>)',
          foreground: 'hsl(var(--te-destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--te-muted))',
          foreground: 'hsl(var(--te-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--te-accent))',
          foreground: 'hsl(var(--te-accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--te-popover))',
          foreground: 'hsl(var(--te-popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--te-card))',
          foreground: 'hsl(var(--te-card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--te-radius) + 4px)',
        lg: 'var(--te-radius)',
        md: 'calc(var(--te-radius) - 2px)',
        sm: 'calc(var(--te-radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--te-font-geist-sans)', ...fontFamily.sans],
        // mono: ["var(--te-font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--te-radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--te-radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  // // plugins: [require("tailwindcss-animate")],
  // corePlugins: {
  //   preflight: false,
  // },
  // prefix: 'sa-',
};
