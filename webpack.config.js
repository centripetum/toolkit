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

const toolkit = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'centripetal-toolkit.node.js',
    libraryTarget: 'umd',
    library: 'centripetal-toolkit',
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

const toolkitMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
      path: path.resolve('./dist'),
      filename: 'centripetal-toolkit.node.min.js',
      libraryTarget: 'umd',
      library: 'centripetal-toolkit',
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

const toolkitWeb = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'centripetal-toolkit.web.js',
    libraryTarget: 'umd',
    library: 'centripetal-toolkit',
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

const toolkitWebMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('./dist'),
      filename: 'centripetal-toolkit.web.min.js',
      libraryTarget: 'umd',
      library: 'centripetal-toolkit',
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
  toolkit,
  toolkitMin,
  toolkitWeb,
  toolkitWebMin,
]
