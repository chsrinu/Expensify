const path = require('path');
module.exports = {
    entry: './src/app.js',
    output:{
        filename:'bundle.js',
        path: path.join(__dirname,'public')
    },
    devServer:{
        contentBase: path.join(__dirname, "public"),
        historyApiFallback:true
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        rules : [{
            loader:'babel-loader',
            test:/\.js$/,
            exclude: path.resolve(__dirname, "node_modules")
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
           
        }]
    }

}