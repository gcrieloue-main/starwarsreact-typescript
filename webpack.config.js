const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const tsConfig = path.join(__dirname, './tsconfig.json');

module.exports = e => {
  let env = e;
  if (!env) env = { production: false };
  const webpackConfigClient = {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.[chunkhash:8].js',
      publicPath: '/',
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/, /test/],
          loader: ['babel-loader'],
        },
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          loader: ['babel-loader', { loader: 'ts-loader', options: { configFile: tsConfig } }],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2|png|jpg|jpeg)(\?.+)?$/,
          loader: 'file-loader?name=[hash:12].[ext]',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        // ** STOP ** Are you adding a new loader?
        // Make sure to add the new loader(s) before the "file" loader.
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[chunkhash:8].css',
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
    ],
    devServer: {
      contentBase: '/dist',
      port: 8080,
      historyApiFallback: true,
      disableHostCheck: true,
    },
    externals: {},
    target: 'web',
  };

  return webpackConfigClient;
};
