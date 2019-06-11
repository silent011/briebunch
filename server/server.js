const path = require('path')
const express = require('express')
const webpack = require('webpack')

const app = express()
const port = process.env.PORT || 3000

const config = require('./webpack_configs/webpack_prod.config')
webpack(config, (err, stats) => {
   if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  console.log(stats.toString({colors: true}))

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  } 

  startServer()
})

function startServer(){
    app.use(express.static(path.resolve(__dirname, '../dist')))

    app.listen(port,(err) => {
        if(!err)
            console.log(`brie listening on port: ${port}`)
        else 
            console.error(err)
    })
}