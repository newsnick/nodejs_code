const fs = require('fs')
// Renaming a File
fs.rename('file.txt', 'new-file.txt', (err) => {
  if (err) throw err
  console.log('File renamed successfully.')
})

// Deleting a File
fs.unlink('xyz.txt', (err) => {
  if (err == 'ENOENT') console.log("File doesn't exist.")
  else console.log('File deleted successfully.')
})
