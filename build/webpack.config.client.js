const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

config={
    mode:'development',
    entry:{
        app:path.join(__dirname, '../client/index.js')
    },
    output: {
        filename: "[name]-[hash:4].js",
        path: path.join(__dirname,'../dist'),
        publicPath: "/public"
    },
    module:{
        rules:[
            {
                test:/\.jsx?/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname, '../client/template.html')
        })
    ]
}

if(isDev){
        config.devtool = 'eval-source-map',
        config.entry={
            app:[
                'react-hot-loader/patch',
                path.join(__dirname,'../client/index.js')
            ]
        }
        config.devServer={
            host:'0.0.0.0',
            port:'8888',
            contentBase:path.join(__dirname,'../dist'),
            overlay:{
                errors:true
            },
            inline:true,
            hot:true,
            publicPath: '/public',
            historyApiFallback:{
                index:'/public/index.html'
            }
        }
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
}


module.exports= config
