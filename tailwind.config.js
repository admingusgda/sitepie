/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E1B46A',
        secondary: '#284837',
        background: '#1a2e1f',
        'background-alt': '#2a4a3a',
        'text-primary': '#E8D5B7',
        'text-secondary': '#D4AF8C',
        accent: '#F4D03F',
        border: '#E1B46A',
        success: '#4CAF50',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        round: '50px',
      },
      boxShadow: {
        sm: '0 4px 6px rgba(0, 0, 0, 0.2)',
        md: '0 10px 25px rgba(0, 0, 0, 0.1)',
        lg: '0 20px 40px rgba(0, 0, 0, 0.3)',
        primary: '0 10px 25px rgba(225, 180, 106, 0.3)',
      },
    },
  },
}
