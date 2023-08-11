import React, { useState } from 'react'
import './EditableContact.css'

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
    <div className="customEditForm" key={contact._id}>
      <p className="editText">
        Name:{' '}
        <input
          className="editInput"
          type="text"
          name="name"
          value={editedContact.name}
          onChange={handleInputChange}
        />
      </p>
      <p className="editText">
        Address:{' '}
        <input
          className="editInput"
          type="text"
          name="address"
          value={editedContact.address}
          onChange={handleInputChange}
        />
      </p>
      <p className="editText">
        Email:{' '}
        <input
          className="editInput"
          type="email"
          name="email"
          value={editedContact.email}
          onChange={handleInputChange}
        />
      </p>
      <p className="editText">
        Phone:{' '}
        <input
          className="editInput"
          type="tel"
          name="phone"
          value={editedContact.phone}
          onChange={handleInputChange}
        />
      </p>
      <button className="btn btn-primary w-25 m-2" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  )
}

export default EditableContact
