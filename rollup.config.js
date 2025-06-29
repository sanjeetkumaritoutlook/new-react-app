// rollup.config.js

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

// ✅ Assign config to a variable to fix the ESLint warning
const config = {
  input: 'src/components/GalaxyExplorer.jsx', // or .jsx if renamed
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'default'
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'] // ✅ Ensures .js files with JSX are resolved
    }),
    commonjs(),
    postcss(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx'], // ✅ Needed if using .js with JSX
    })
  ]
};

export default config;
