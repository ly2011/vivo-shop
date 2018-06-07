const path = require('path'); // eslint-disable-line
const webpack = require('webpack');
const merge = require('webpack-merge'); // eslint-disable-line
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
// eslint-disable-next-line
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, 'node_modules')]
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('vue-svg-loader');
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          cssSourceMap: true,
          extractCSS: true
        })
      );
    config.module
      .rule('json')
      .test(/\.(json)(\?.*)?$/i)
      .use('json-loader')
      .loader('json-loader')
      .options({
        name: path.join('static', 'static/[name].[ext]')
      });

    // config.module
    //   .rule('scss')
    //   .use('sass-loader')
    //   .tap(options =>
    //     merge(options, {
    //       includePaths: [path.resolve(__dirname, 'node_modules')] // eslint-disable-line
    //     })
    //   );

    // eslint-disable-next-line
    // if (process.env.NODE_ENV === 'production') {
    //   const inlineLimit = 10000;
    //   const assetsPath = 'static/assets';

    //   config.output
    //     .filename(path.join(assetsPath, 'js/[name].[chunkhash:8].js'))
    //     .chunkFilename(path.join(assetsPath, '/js/chunk[id].[chunkhash:8].js'));

    //   config.plugin('extract-css').use(ExtractTextPlugin, [
    //     {
    //       filename: path.join(assetsPath, 'css/[name].[contenthash:8].css'),
    //       allChunks: true
    //     }
    //   ]);

    //   config.module
    //     .rule('images')
    //     .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    //     .use('url-loader')
    //     .loader('url-loader')
    //     .options({
    //       limit: inlineLimit,
    //       name: path.join(assetsPath, 'img/[name].[hash:8].[ext]')
    //     });

    //   config.module
    //     .rule('fonts')
    //     .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
    //     .use('url-loader')
    //     .loader('url-loader')
    //     .options({
    //       limit: inlineLimit,
    //       name: path.join(assetsPath, 'fonts/[name].[hash:8].[ext]')
    //     });
    // }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      /* eslint-disable */
      config.plugins.push(new LodashModuleReplacementPlugin());
      config.plugins.push(
        new webpack.ContextReplacementPlugin(
          /moment[\/\\]locale$/,
          /zh-cn|en-gb/
        )
      );
      /* eslint-enable */
    }
  }
};
