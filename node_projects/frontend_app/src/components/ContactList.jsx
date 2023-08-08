// import React, { useState, useEffect } from 'react'
// import './ContactList.css'
// import ContactSearch from './ContactSearch'

// const EditableContact = ({ contact, onSave }) => {
//   const [editedContact, setEditedContact] = useState({ ...contact })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setEditedContact((prevContact) => ({ ...prevContact, [name]: value }))
//   }

//   const handleSaveClick = () => {
//     onSave(editedContact)
//   }

//   return (
//     <div key={contact._id}>
//       <p>
//         Name:{' '}
//         <input
//           type="text"
//           name="name"
//           value={editedContact.name}
//           onChange={handleInputChange}
//         />
//       </p>
//       <p>
//         Address:{' '}
//         <input
//           type="text"
//           name="address"
//           value={editedContact.address}
//           onChange={handleInputChange}
//         />
//       </p>
//       <p>
//         Email:{' '}
//         <input
//           type="email"
//           name="email"
//           value={editedContact.email}
//           onChange={handleInputChange}
//         />
//       </p>
//       <p>
//         Phone:{' '}
//         <input
//           type="tel"
//           name="phone"
//           value={editedContact.phone}
//           onChange={handleInputChange}
//         />
//       </p>
//       <button className="btn btn-primary" onClick={handleSaveClick}>
//         Save
//       </button>
//     </div>
//   )
// }

// const ContactList = () => {
//   const [contacts, setContacts] = useState([])

//   useEffect(() => {
//     // const accessToken =
//     //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQzMjAzMiwiZXhwIjoxNjkxNDQ2NDMyfQ.TnUDwcH_WzYblP-PtnuoaEQZkX_glCK7-ECgOBhoeJE'

//     fetch('http://localhost:8080/api/contacts', {
//       headers: {
//         // Authorization: `Bearer ${accessToken}`, // include access token here
//         Authorization: 'none',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setContacts(data))
//       .catch((error) => console.error('Error fetching data;', error))
//   }, [])

//   const handleDeleteContact = (contactId) => {
//     if (contactId) {
//       const accessToken =
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQ3ODU4OCwiZXhwIjoxNjkxNDkyOTg4fQ.4iY8fHxDZxCsj1hlJM7bNYNYfq_70isfGryY2y-uFRc'
//       fetch(`http://localhost:8080/api/contacts/${contactId}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         method: 'DELETE',
//       })
//         .then((response) => {
//           if (response.ok) {
//             // Contact successfully deleted
//             setContacts((prevContacts) =>
//               prevContacts.filter((contact) => contact._id !== contactId)
//             )
//           } else {
//             console.error('Error deleting contact:', response.statusText)
//           }
//         })
//         .catch((error) => console.error('Error deleting contact:', error))
//     } else {
//       console.error('Contact ID is undefined')
//     }
//   }

//   const handleUpdateContact = (updatedContact) => {
//     const accessToken =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQ3ODU4OCwiZXhwIjoxNjkxNDkyOTg4fQ.4iY8fHxDZxCsj1hlJM7bNYNYfq_70isfGryY2y-uFRc'

//     fetch(`http://localhost:8080/api/contacts/${updatedContact._id}`, {
//       method: 'PUT', // Use PUT method for updating data
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/json', // Specify the content type for the request body
//       },
//       body: JSON.stringify(updatedContact), // Convert the updatedContact object to JSON
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Contact successfully updated
//           // Toggle the editMode off and update the state with the updated contact
//           setContacts((prevContacts) =>
//             prevContacts.map((contact) =>
//               contact._id === updatedContact._id
//                 ? { ...updatedContact, editMode: false }
//                 : contact
//             )
//           )
//         } else {
//           console.error('Error updating contact:', response.statusText)
//         }
//       })
//       .catch((error) => console.error('Error updating contact:', error))
//   }

//   const handleSearchByName = (searchName) => {
//     const accessToken =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQ3ODU4OCwiZXhwIjoxNjkxNDkyOTg4fQ.4iY8fHxDZxCsj1hlJM7bNYNYfq_70isfGryY2y-uFRc'

//     fetch(`http://localhost:8080/api/contacts/${searchName}`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setContacts(data)
//         } else if (data._id) {
//           setContacts([data])
//         } else {
//           setContacts([])
//         }
//       })
//       .catch((error) => console.error('Error fetching name:', error))
//   }
//   return (
//     <div>
//       <h2>Contact List</h2> <ContactSearch onSearch={handleSearchByName} />
//       <div className="container">
//         <div className="row">
//           {contacts.map((contact) => (
//             <div className="col-md-4 mb-3" key={contact._id}>
//               {contact.editMode ? (
//                 <EditableContact
//                   contact={contact}
//                   onSave={handleUpdateContact}
//                 />
//               ) : (
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{contact.name}</h5>
//                     <p className="card-text">Address: {contact.address}</p>
//                     <p className="card-text">Email: {contact.email}</p>
//                     <p className="card-text">Phone: {contact.phone}</p>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() =>
//                         setContacts((prevContacts) =>
//                           prevContacts.map((prevContact) =>
//                             prevContact._id === contact._id
//                               ? { ...prevContact, editMode: true }
//                               : prevContact
//                           )
//                         )
//                       }
//                     >
//                       Update Contact
//                     </button>
//                     <button
//                       className="btn btn-danger m-2"
//                       onClick={() => handleDeleteContact(contact._id)}
//                     >
//                       Delete Contact
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactList

import React, { useState, useEffect } from 'react'
import './ContactList.css'
import ContactSearch from './ContactSearch'

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
  const [searchName, setSearchName] = useState('')

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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQ3ODU4OCwiZXhwIjoxNjkxNDkyOTg4fQ.4iY8fHxDZxCsj1hlJM7bNYNYfq_70isfGryY2y-uFRc'
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQ3ODU4OCwiZXhwIjoxNjkxNDkyOTg4fQ.4iY8fHxDZxCsj1hlJM7bNYNYfq_70isfGryY2y-uFRc'

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

  const handleSearchByName = (searchName) => {
    setSearchName(searchName)
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTQ3ODU4OCwiZXhwIjoxNjkxNDkyOTg4fQ.4iY8fHxDZxCsj1hlJM7bNYNYfq_70isfGryY2y-uFRc'

    fetch(`http://localhost:8080/api/contacts/${searchName}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setContacts(data)
        } else if (data._id) {
          setContacts([data])
        } else {
          setContacts([])
        }
      })
      .catch((error) => console.error('Error fetching name:', error))
  }

  const handleClearSearch = () => {
    setSearchName('')
    setContacts([])
  }

  return (
    <div>
      <h2>Contact List</h2>{' '}
      <ContactSearch
        onSearch={handleSearchByName}
        onClear={handleClearSearch}
      />
      <div className="container">
        <div className="row">
          {contacts.map((contact) => (
            <div className="col-md-4 mb-3" key={contact._id}>
              {contact.editMode ? (
                <EditableContact
                  contact={contact}
                  onSave={handleUpdateContact}
                />
              ) : (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text">Address: {contact.address}</p>
                    <p className="card-text">Email: {contact.email}</p>
                    <p className="card-text">Phone: {contact.phone}</p>
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactList
