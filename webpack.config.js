const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

const config = {
    mode: isDev ? 'development' : 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist/')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|es|es6)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            }
            ,
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            title: 'R-TODO'
        })
    ]
}

if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'

    config.plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    )

    config.devServer = {
        port: 2333,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true
    }
}

module.exports = config