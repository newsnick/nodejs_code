import React, { useState, useEffect } from 'react'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    // get access token from auth endpoint (postman)
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTE0MzY3MiwiZXhwIjoxNjkxMTQ3MjcyfQ.KfjHxR5NYC7mD5FNAPZgBAPh7gHaSSSIAq8MFe_mIk8'

    fetch('http://localhost:8080/api/contacts', {
      headers: {
        Authorization: `Bearer ${accessToken}`, // include access token here
      },
    })
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching data;', error))
  }, [])

  const handleDeleteContact = (contactId) => {
    fetch(`http://localhost:8080/api/contacts/${contactId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // handle success, eg. update the state to remove the deleted contact
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== contactId)
        )
      })
      .catch((error) => console.error('Error deleting contact:', error))
  }

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Address: {contact.address}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete Contact
          </button>
        </div>
      ))}
    </div>
  )
}

export default ContactList
