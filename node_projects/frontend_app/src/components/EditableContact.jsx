import React, { useState } from 'react'

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

export default EditableContact
