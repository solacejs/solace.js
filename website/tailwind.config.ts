import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "accent": "var(--accent)",
        "background": "var(--background)",
        "code": "var(--code)",
        "foreground": "var(--foreground)",
        "foreground-2": "var(--foreground-2)",
        "input": "var(--input)",
        "nav-border": "var(--nav-border)",
        "sidebar": "var(--sidebar)"
      }
    },
  },
  plugins: [],
}
export default config
