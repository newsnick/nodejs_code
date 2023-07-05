const fs = require('fs')

// Creating a readable stream and reading file in chunks
const readStream = fs.createReadStream(
  'E:\\fullstackbatch\\Node\\files\\big-file.txt',
  {
    encoding: 'utf8',
    highWaterMark: 20, // Set the chunk size to 20 characters
  }
)

readStream.on('data', (chunk) => {
  console.log('Received chunk of data:', chunk)
  // Process the chunk of data as needed
})

readStream.on('error', (err) => {
  console.error('An error occurred while reading the file:', err)
})

readStream.on('end', () => {
  console.log('Finished reading the file.')
})

// Difference between readStream and readFile
/*
When you read data directly from a file using methods like fs.readFile()
or fs.readFileSync(), the entire file is loaded into memory as a single chunk.
This approach is suitable for small to medium-sized files where the entire content
can comfortably fit in memory.
streams, instead of loading the entire file into memory at once. 
This approach is particularly useful for handling large files or 
when you want to process the file data incrementally or perform 
operations on specific parts of the file. 
*/
