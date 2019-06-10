const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'dist')))

app.listen(port,(err) => {
    if(!err)
        console.log(`brie listening on port: ${port}`)
    else 
        console.error(err)
})