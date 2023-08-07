const Contact = require('../models/contact.model')

const createContact = async (req, res) => {
  const contactsData = req.body

  try {
    // Using insertMany to create multiple contacts in bulk
    const contacts = await Contact.insertMany(contactsData)
    res.send('Contacts inserted successfully.')
  } catch (error) {
    console.log('Error while inserting data:', error)
    res.status(500).send('Error while inserting data.')
  }
}

// Contact fetch all operation
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.send(contacts)
  } catch (error) {
    console.log('Error while fetching data:', error)
    res.status(500).send('Error while fetching data.')
  }
}

// Contact update operation
const updateContact = async (req, res) => {
  const { id } = req.params
  const { name, address, email, phone } = req.body

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { name, address, email, phone },
      { new: true }
    )
    if (!contact) {
      return res.status(404).send('Contact not found.')
    }
    res.send('contact updated successfully')
  } catch (error) {
    console.log('Error while updating Contact:', error)
    res.status(500).send('Error while updating contact.')
  }
}

//Contact delete operation
const deleteContact = async (req, res) => {
  const { id } = req.params
  try {
    const contact = await Contact.findByIdAndDelete(id)
    if (!contact) {
      return res.status(404).send('Contact not found.')
    }
    res.send('Contact deleted successfully.')
  } catch (error) {
    console.log('Error while deleting Contact:', error)
    res.status(500).send('Error while deleting contact.')
  }
}

module.exports = {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
}
