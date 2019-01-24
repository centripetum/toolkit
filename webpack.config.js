'use strict'

const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const minimizeTrait = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
}

const cui = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'CUI.node.js',
    libraryTarget: 'umd',
    library: 'CUI',
  },
  externals: {
    ramda: 'ramda',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: '9',
                },
                forceAllTransforms: true,
              },
            ],
          ],
        },
      },
      {
        exclude: /node_modules/u,
        loader: 'eslint-loader',
        options: {},
        test: /\.js$/u
      },
    ],
  },
}

const cuiMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
      path: path.resolve('./dist'),
      filename: 'CUI.node.min.js',
      libraryTarget: 'umd',
      library: 'CUI',
    },
    externals: {
      ramda: 'ramda',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: '4',
                  },
                  forceAllTransforms: true,
                },
              ],
            ],
          },
        },
        {
          exclude: /node_modules/u,
          loader: 'eslint-loader',
          options: {},
          test: /\.js$/u
        },
      ],
    },
  },
  minimizeTrait
)

const cuiWeb = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'CUI.web.js',
    libraryTarget: 'umd',
    library: 'CUI',
  },
  externals: {
    ramda: 'R',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                forceAllTransforms: true,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-modules-commonjs',
              {
                loose: true,
              },
            ],
          ],
        },
      },
      {
        exclude: /node_modules/u,
        loader: 'eslint-loader',
        options: {},
        test: /\.js$/u
      },
    ],
  },
}

const cuiWebMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('./dist'),
      filename: 'CUI.web.min.js',
      libraryTarget: 'umd',
      library: 'CUI',
    },
    externals: {
      ramda: 'R',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true,
                },
              ],
            ],
            plugins: [
              [
                '@babel/plugin-transform-modules-commonjs',
                {
                  loose: true,
                },
              ],
            ],
          },
        },
        {
          exclude: /node_modules/u,
          loader: 'eslint-loader',
          options: {},
          test: /\.js$/u
        },
      ],
    },
  },
  minimizeTrait
)

module.exports = [
  cui,
  cuiMin,
  cuiWeb,
  cuiWebMin,
]
