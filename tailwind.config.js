/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
    {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
          colors: {
            primary: "#28B2FF",
            textPrimary: "#252525",
            colorBorder: "#C4C4C4"

          },
          fontFamily: {
            montserrat:['Montserrat', 'sans-serif'],
            
          },
        },
      },
      plugins: [
    require('@headlessui/tailwindcss')
  ],
    }
)
