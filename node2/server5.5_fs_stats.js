const fs = require('fs')
// Getting File Stats
fs.stat('file.txt', (err, stats) => {
  if (err) throw err
  console.log('File size:', stats.size)
  console.log('Is file?', stats.isFile())
  console.log('Is directory?', stats.isDirectory())
})
