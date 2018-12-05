const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const isDev = process.env.NODE_ENV === 'development'

config=merge(baseConfig,{
    mode:'development',
    entry:{
        app:path.join(__dirname, '../client/index.js')
    },
    output: {
        filename: "[name]-[hash:4].js",
        path: path.join(__dirname,'../dist'),
        publicPath: ""
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname, '../client/template.html')
        })
    ]
})

if(isDev){
        config.devtool = '#cheap-module- eval-source-map',
        config.entry={
            app:[
                'react-hot-loader/patch',
                path.join(__dirname,'../client/index.js')
            ]
        }
        config.devServer={
            host:'0.0.0.0',
            port:'8080',
            contentBase:path.join(__dirname,'../dist'),
            overlay:{
                errors:true
            },
            inline:true,
            hot:true,
            publicPath: '',
            historyApiFallback:{
                index:'/public/index.html'
            },
            proxy:{
                '/v1':{
                    target:'https://cnodejs.org/api/v1/',
                    changeOrigin:true,
                    secure:false
                }

            }
        }
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
}


module.exports= config
