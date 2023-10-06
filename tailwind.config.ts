import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-gray': '#868686',
      },
      fontSize: {
        xs: '10px',
        sm: '11px',
        base: '12px',
        lg: '14px',
      },
      width: {
        a4: '1056px',
      },
      height: {
        a4: '1632px',
      },
    },
  },
  plugins: [],
};
export default config;
