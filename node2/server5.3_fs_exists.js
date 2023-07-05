// Checking if a File Exists
const fs = require('fs')
fs.stat('file.txt', (err, stats) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist.')
    } else {
      console.error('An error occurred while checking file existence:', err)
    }
  } else {
    console.log('File exists.')
  }
})

/*
stat() method is used to retrieve information about the file. 
If an error occurs during the file retrieval, the callback 
function will be called with an error object.
*/
