// copy data from one file to another file using stream.
const fs = require('fs')

const readStream = fs.createReadStream(
  'E:\\fullstackbatch\\Node\\files\\big-file.txt'
)
const writeStream = fs.createWriteStream(
  'E:\\fullstackbatch\\Node\\files\\outputfile.txt'
)

readStream.pipe(writeStream)
console.log('Data transferred successfully.')
