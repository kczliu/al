
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {

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
