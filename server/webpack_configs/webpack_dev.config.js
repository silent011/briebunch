const path = require('path');

module.exports = {
    entry: '../../client/client.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'main_bunde.js'
    },
    module: {
        rules:[
            {test:/\.jpg$/, use:'file-loader'},
            {test:/\.css$/, use: ['css-loader']},
            {test:/\.html$/, use: {loader:'html-loader'}}
        ]
    }
}