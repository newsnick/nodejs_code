const mongoose = require('mongoose')

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection'))
db.once('open', () => {
  console.log('Connected to mongoDB')
})

module.exports = mongoose
