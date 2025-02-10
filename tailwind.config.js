/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          300: 'hsl(252, 6%, 83%)',
          500: 'hsl(245, 15%, 58%)',
          700: 'hsl(245, 19%, 35%)',
          900: 'hsl(248, 70%, 10%)',
        },
        orange: {
          500: 'hsl(7, 88%, 67%)',
          700: 'hsl(7, 71%, 60%)',
        },
      },
      screens: {
        'xs': '500px',  // Custom extra small screen
        'sm': '640px',  // Small devices (default)
        'md': '768px',  // Medium devices (default)
        'mid': '800px',
        'lg': '1023px', // Large devices (default)
        'xl': '1280px', // Extra large devices (default)
        '2xl': '1536px', // 2X extra large (default)
        'custom': '900px', // Example custom breakpoint
      },
    },
  },
  plugins: [],
}

