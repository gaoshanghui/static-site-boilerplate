// ------------
// Bundle Javascript
// bundler for JavaScript which compiles small pieces of code into something larger. 
// ------------

// const gulp = require('gulp');
const rollup = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve')
// const babel = require('@rollup/plugin-babel')

const bundleScripts = async () => {
  const bundle = await rollup.rollup({
    input: './src/js/main.js',
    plugins: [
      nodeResolve({
        moduleDirectory: 'node_modules'
      })
    ],
    external: ['lodash']
  })

  await bundle.write({
    file: './dist/main.js',
    format: 'iife',
    name: 'main',
    sourcemap: true
  })  
}

exports.bundleScripts = bundleScripts;