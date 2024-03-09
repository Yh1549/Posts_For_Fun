module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [require("preline/plugin")],
  darkMode: "class",
};
