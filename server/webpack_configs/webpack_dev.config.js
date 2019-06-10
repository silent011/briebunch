const path = require('path');

module.exports = {
    entry: '../../client/client.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'main_bunde.js'
    }
}