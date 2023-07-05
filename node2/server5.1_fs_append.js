// appending data file.
const fs = require('fs')
// Writing to a File Asynchronously
fs.appendFile('file1.txt', 'Hello, again!', (err) => {
  if (err) throw err
  console.log('File1 appended successfully.')
})

// Writing to a File Synchronously
fs.appendFileSync('file2.txt', 'Hello, again!')
console.log('File2 appended successfully.')
