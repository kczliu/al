
config={
    module:{
        rules:[
            {
                test:/\.jsx?/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(ttf|woff|svg)/,
                loader:'url-loader'
            },
            {
                test:/\.css/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {}
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit:8192,
                        }
                    }
                ]
            },
        ]
    },
    resolve:{
      extensions:['.js','.css']
    }
}




module.exports= config
