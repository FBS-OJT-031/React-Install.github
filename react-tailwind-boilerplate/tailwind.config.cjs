/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
      colors:{
        // dark: "#0D0D0D",
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        alert:'rgb(var(--alert) / <alpha-value>)',
        cancel:'rgb(var(--cancel) / <alpha-value>)',
        info:'rgb(var(--info) / <alpha-value>)',
        warning:'rgb(var(--warning) / <alpha-value>)',
      },
      backgroundImage:{
        // transparent_bg: "url('../dist/img/transparent.png')",
      },
      backgroundSize: {
        // auto: 'auto',
        // cover: 'cover',
        // contain: 'contain',
      },
      aspectRatio: {
        // auto: 'auto',
        // square: '1 / 1',
        // video: '16 / 9',
      },
      gridTemplateColumns: {
        // 'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      fontFamily: {
        // 'text-inter': ["Inter", "sans-serif"],
      },
      fontSize: {
        // 'button' : 'clamp(16px, 1vw, 24px),
      },
      listStyleType: {
      //   none: 'none',
      //   circle: 'circle',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      },
      animation: {
        'rotate': "rotate 2s linear infinite",
        'loading' : "loading 1.5s ease-in infinite",
      },
      keyframes: {
        // better to use direct CSS keyframes on input file base
        'rotate' : {
          "100%" : {"transform":"rotate(360deg)"}
        },
        "loading": {
            "0%" : { "transform": "translateX(-100%)" },
          "100%" : { "transform": "translateX(100%)" },
        },
      },
      boxShadow:{
        // 'top_button_shadow'     : '4px 4px 10px rgba(15, 15, 15, 0.2)',
      },
      dropShadow:{
        // 'top_button_shadow'     : '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      },
      padding:{
        // 'container_p' : 'calc(1.5rem * 0.5)',
      },
      margin:{
        // 'heading_margin_bottom' : 'clamp(32px, 2.5vw, 64px)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
