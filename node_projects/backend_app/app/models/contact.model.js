const mongoose = require('../db-config/db-connection')

// Contact schema definition
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    required: true,
  },
})

// Contact model creation
const Contact = mongoose.model('contacts', contactSchema)

module.exports = Contact
