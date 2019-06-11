const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './client/client.js',
    output: {
        path:path.resolve(__dirname, '../../dist'),
        filename:'main_bunde.js'
    },
    module: {
        rules:[
            {test:/\.jpg$/, use:'file-loader'},
            {test:/\.css$/, use: ['css-loader']},
            {test:/\.js$/, exclude:/node_modules/,loader:'babel-loader'},
            {test:/\.styl$/, use:['style-loader','css-loader','stylus-loader']}
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Brie Bunch',
            template: './client/index.html',
            favicon:'./client/media/favi.ico'
        })
    ]
}