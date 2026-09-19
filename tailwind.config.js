/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#0E0906',
          900: '#1A120B',
          800: '#2B1E16',
          700: '#3C2A21',
          600: '#543D32',
          500: '#6F5345',
        },
        mocha: {
          900: '#24160E',
          800: '#382317',
          700: '#4E3222',
          600: '#694530',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F4ED',
          200: '#F2EBE0',
          300: '#E8DDCF',
        },
        latte: {
          100: '#F4EFEA',
          200: '#EAE3D9',
          300: '#DDD2C3',
          400: '#CBBBA8',
        },
        copper: {
          300: '#E5A97D',
          400: '#D99868',
          500: '#C68B59',
          600: '#B07545',
          700: '#945F33',
        },
        champagne: {
          300: '#F0DEC4',
          400: '#E5CDA8',
          500: '#D8B18A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
