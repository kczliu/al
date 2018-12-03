
config={
    module:{
        rules:[
            {
                test:/\.jsx?/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.(ttf|woff|svg)/,
                loader:'url-loader'
            }
        ]
    },
    resolve:{
      extensions:['.js']
    }
}




module.exports= config
