/** @type {import('tailwindcss').Config} */
// Colours are CSS variables (assets/css/tailwind.css) so light and dark mode
// share one set of class names.
const tone = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: tone("paper"), deep: tone("paper-deep"), card: tone("paper-card") },
        ink: { DEFAULT: tone("ink"), soft: tone("ink-soft"), faint: tone("ink-faint") },
        rule: { DEFAULT: tone("rule"), strong: tone("rule-strong") },
        forest: { DEFAULT: tone("forest"), deep: tone("forest-deep"), tint: tone("forest-tint") },
        gold: { DEFAULT: tone("gold"), soft: tone("gold-soft") },
        "on-forest": tone("on-forest"),
      },
      fontFamily: {
        serif: ['"EB Garamond Variable"', '"EB Garamond"', "Palatino", "Georgia", "serif"],
        sans: ['"Inter Variable"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ['"Pinyon Script"', "cursive"],
      },
      boxShadow: {
        page: "0 1px 2px rgb(30 27 22 / 0.05), 0 12px 32px -18px rgb(30 27 22 / 0.35)",
      },
    },
  },
  plugins: [],
};
