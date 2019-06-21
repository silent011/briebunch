const fs = require('fs')

let handleMusicRoute = (req, res) => {
    let trackName = req.params.trackName
    let path = `./server/music/${trackName}.mp3`

    let stat = fs.statSync(path),
        range = req.headers.range

    let readStream;
    if(range !== undefined) {
        let parts = range.replace(/bytes=/,"").split("-")

        let [partStart, partEnd] = parts

        if((isNaN(partStart) && partStart.length > 1) || (isNaN(partEnd) && partEnd.length > 1)){
            res.sendStatus(500)
        } 

        let start = parseInt(partStart, 10)
        let end = partEnd ? parseInt(partEnd, 10) : stat.size - 1
        let contentLength = (end - start) + 1

        res.status(206).header({
            'Content-Type':'audio/mpeg',
            'Content-Length': contentLength,
            'Content-Range': `bytes ${start}-${end}/${stat.size}`
        })

        readStream = fs.createReadStream(path, {start, end})
    } else {
        console.log('in else audio')
        res.header({
            'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        })

        readStream = fs.createReadStream(location)
    }

    readStream.pipe(res)
    
} 

module.exports = {
    handleMusicRoute
}