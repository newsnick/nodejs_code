import React, { useState, useEffect } from 'react'
import './ContactList.css'

const EditableContact = ({ contact, onSave }) => {
  const [editedContact, setEditedContact] = useState({ ...contact })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditedContact((prevContact) => ({ ...prevContact, [name]: value }))
  }

  const handleSaveClick = () => {
    onSave(editedContact)
  }

  return (
    <div key={contact._id}>
      <p>
        Name:{' '}
        <input
          type="text"
          name="name"
          value={editedContact.name}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Address:{' '}
        <input
          type="text"
          name="address"
          value={editedContact.address}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Email:{' '}
        <input
          type="email"
          name="email"
          value={editedContact.email}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Phone:{' '}
        <input
          type="tel"
          name="phone"
          value={editedContact.phone}
          onChange={handleInputChange}
        />
      </p>
      <button className="btn btn-primary" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  )
}

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    // const accessToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQzMjAzMiwiZXhwIjoxNjkxNDQ2NDMyfQ.TnUDwcH_WzYblP-PtnuoaEQZkX_glCK7-ECgOBhoeJE'

    fetch('http://localhost:8080/api/contacts', {
      headers: {
        // Authorization: `Bearer ${accessToken}`, // include access token here
        Authorization: 'none',
      },
    })
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching data;', error))
  }, [])

  const handleDeleteContact = (contactId) => {
    if (contactId) {
      const accessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQzMjAzMiwiZXhwIjoxNjkxNDQ2NDMyfQ.TnUDwcH_WzYblP-PtnuoaEQZkX_glCK7-ECgOBhoeJE'
      fetch(`http://localhost:8080/api/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // Contact successfully deleted
            setContacts((prevContacts) =>
              prevContacts.filter((contact) => contact._id !== contactId)
            )
          } else {
            console.error('Error deleting contact:', response.statusText)
          }
        })
        .catch((error) => console.error('Error deleting contact:', error))
    } else {
      console.error('Contact ID is undefined')
    }
  }

  const handleUpdateContact = (updatedContact) => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQzMjAzMiwiZXhwIjoxNjkxNDQ2NDMyfQ.TnUDwcH_WzYblP-PtnuoaEQZkX_glCK7-ECgOBhoeJE'

    fetch(`http://localhost:8080/api/contacts/${updatedContact._id}`, {
      method: 'PUT', // Use PUT method for updating data
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json', // Specify the content type for the request body
      },
      body: JSON.stringify(updatedContact), // Convert the updatedContact object to JSON
    })
      .then((response) => {
        if (response.ok) {
          // Contact successfully updated
          // Toggle the editMode off and update the state with the updated contact
          setContacts((prevContacts) =>
            prevContacts.map((contact) =>
              contact._id === updatedContact._id
                ? { ...updatedContact, editMode: false }
                : contact
            )
          )
        } else {
          console.error('Error updating contact:', response.statusText)
        }
      })
      .catch((error) => console.error('Error updating contact:', error))
  }

  return (
    <div className="card" style={{ width: '21rem', margin: '20px 0 0 400px' }}>
      <div className="card-header">
        {' '}
        <h2>Contact List</h2>
      </div>

      {contacts.map((contact) => (
        <div key={contact._id}>
          {contact.editMode ? (
            <EditableContact contact={contact} onSave={handleUpdateContact} />
          ) : (
            <>
              <div className="card-body">
                {' '}
                <p>Name: {contact.name}</p>
                <p>Address: {contact.address}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setContacts((prevContacts) =>
                      prevContacts.map((prevContact) =>
                        prevContact._id === contact._id
                          ? { ...prevContact, editMode: true }
                          : prevContact
                      )
                    )
                  }
                >
                  Update Contact
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => handleDeleteContact(contact._id)}
                >
                  Delete Contact
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default ContactList
