import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "accent": "var(--accent)",
        "background": "var(--background)",
        "code": "var(--code)",
        "foreground": "var(--foreground)",
        "foreground-2": "var(--foreground-2)",
        "input": "var(--input)",
        "nav-border": "var(--nav-border)",
        "sidebar": "var(--sidebar)",
        "table-title": "var(--table-title)"
      }
    },
  },
  plugins: [],
}
export default config
