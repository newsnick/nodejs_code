// const mongoose = require('mongoose')

// // Database connection
// mongoose.connect('mongodb://127.0.0.1:27017/register', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'Connection'))
// db.once('open', () => {
//   console.log('Connected to mongoDB')
// })

// module.exports = mongoose

const mongoose = require('mongoose')

// Database connection
const dbUIR =
  'mongodb+srv://test:test@cluster0.94hm35r.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect(dbUIR, options)
  .then(() => {
    console.log('Connected to MongoDB Atlas')
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err)
  })

module.exports = mongoose
