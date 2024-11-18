/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // TailwindCSS for utility-first styling
    autoprefixer: {}, // Add vendor prefixes automatically
    'postcss-nested': {}, // Enables nesting
    'postcss-preset-env': {
      stage: 1, // Enables modern CSS features
      autoprefixer: { grid: true }, // Ensures proper grid support
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // Minify CSS in production
  },
};

export default config;
