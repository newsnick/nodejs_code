// Read data using stream line by line

const fs = require('fs')
const readline = require('readline')

// Create a readable stream
const readStream = fs.createReadStream(
  'E:\\fullstackbatch\\Node\\files\\big-file.txt',
  'utf8'
)

// Create a readline interface
const rl = readline.createInterface({
  input: readStream,
  //   output: process.stdout, // Optional, used for prompt
})

// Event handler for each line of data
rl.on('line', (line) => {
  console.log('Read line:', line)
  // Process the line of data as needed
})

// Event handler for error
rl.on('error', (err) => {
  console.error('An error occurred while reading the file:', err)
})

// Event handler for end of file
rl.on('close', () => {
  console.log('Finished reading the file.')
})
