const http = require('http')
const url = require('url')
const fs = require('fs')

const bookData = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
  },
]

const jsonData = JSON.stringify(bookData, null, 2)

fs.writeFile('booksData.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing JSON file:', err)
    return
  }
  console.log('Book data written to booksData.json file')
})

const server = http.createServer((req, res) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'")
  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (req.method === 'GET' && req.url === '/books') {
    fs.readFile('booksData.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading JSON file:', err)
        res.statusCode = 500
        res.end('Internal Server Error')
        return
      }
      res.end(data)
    })
  } else if (req.method === 'POST' && req.url === '/books') {
    let requestBody = ''

    req.on('data', (chunk) => {
      requestBody += chunk
    })

    req.on('end', () => {
      try {
        const newBook = JSON.parse(requestBody)
        newBook.id = bookData.length + 1
        bookData.push(newBook)
        fs.writeFile(
          'booksData.json',
          JSON.stringify(bookData, null, 2),
          (err) => {
            if (err) {
              console.error('Error writing JSON file:', err)
              res.statusCode = 500
              res.end('Internal Server Error')
              return
            }
            res.statusCode = 201
            res.end(JSON.stringify(newBook))
          }
        )
      } catch (error) {
        console.error('Error parsing request body:', error)
        res.statusCode = 400
        res.end('Bad Request')
      }
    })
  } else if (req.method === 'PUT' && req.url.startsWith('/books/')) {
    const bookId = parseInt(req.url.split('/')[2])
    let requestBody = ''

    req.on('data', (chunk) => {
      requestBody += chunk
    })

    req.on('end', () => {
      try {
        const updatedBook = JSON.parse(requestBody)
        let bookToUpdate = bookData.find((book) => book.id === bookId)

        if (bookToUpdate) {
          bookToUpdate.title = updatedBook.title || bookToUpdate.title
          bookToUpdate.author = updatedBook.author || bookToUpdate.author
          bookToUpdate.year = updatedBook.year || bookToUpdate.year
          bookToUpdate.genre = updatedBook.genre || bookToUpdate.genre

          fs.writeFile(
            'booksData.json',
            JSON.stringify(bookData, null, 2),
            (err) => {
              if (err) {
                console.error('Error writing JSON file:', err)
                res.statusCode = 500
                res.end('Internal Server Error')
                return
              }
              res.statusCode = 200
              res.end(JSON.stringify(bookToUpdate))
            }
          )
        } else {
          res.statusCode = 404
          res.end('Book not found')
        }
      } catch (error) {
        console.error('Error parsing request body:', error)
        res.statusCode = 400
        res.end('Bad Request')
      }
    })
  } else if (req.method === 'DELETE' && req.url.startsWith('/books/')) {
    const bookId = parseInt(req.url.split('/')[2])
    const bookIndex = bookData.findIndex((book) => book.id === bookId)

    if (bookIndex !== -1) {
      const deletedBook = bookData.splice(bookIndex, 1)[0]

      fs.writeFile(
        'booksData.json',
        JSON.stringify(bookData, null, 2),
        (err) => {
          if (err) {
            console.error('Error writing JSON file:', err)
            res.statusCode = 500
            res.end('Internal Server Error')
            return
          }
          res.statusCode = 200
          res.end(JSON.stringify(deletedBook))
        }
      )
    } else {
      res.statusCode = 404
      res.end('Book not found')
    }
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
})

server.listen(8000, () => {
  console.log('Server is running on port 8000')
})

// 2. create a Node JS project to implement CURD(create,update,retrieve,delete) operation on BOOK data.
// to store book data you can use json file or array of objects.
// Implement a server using the built-in http module to handle HTTP requests.
// Define routes for different HTTP methods (GET, POST, PUT, DELETE) and corresponding functionalities.
// expected path and HTTP methods, implement the following functionality for each CRUD operation:
// GET /books: Retrieve all books.
// POST /books: Create a new book.
// GET /books/:id: Retrieve a specific book by ID.
// PUT /books/:id: Update a specific book by ID.
// DELETE /books/:id: Delete a specific book by ID.
// Test the API using tools like Postman to send requests and verify the responses.
