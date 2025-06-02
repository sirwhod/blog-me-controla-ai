import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue,svelte}',
    './public/index.html',
    './index.html',
    './node_modules/@my-library/**/*.{js,ts,jsx,tsx,vue,svelte}',	
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

