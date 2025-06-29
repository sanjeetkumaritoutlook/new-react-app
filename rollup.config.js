import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/GalaxyExplorer.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'default'
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    postcss(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] })
  ]
};
