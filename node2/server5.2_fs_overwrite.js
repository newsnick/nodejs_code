// overwriting data file.
const fs = require('fs')
// Writing to a File Asynchronously
fs.writeFile('file1.txt', 'Hello, world!', (err) => {
  if (err) throw err
  console.log('File1 written successfully.')
})

// Writing to a File Synchronously
fs.writeFileSync('file2.txt', 'Hello, world!')
console.log('File2 written successfully.')
