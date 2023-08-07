import React, { useState } from 'react'

const ContactSearch = ({ onSearch }) => {
  const [searchName, setSearchName] = useState('')

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const handleSearchClick = () => {
    onSearch(searchName)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name..."
        value={searchName}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  )
}

export default ContactSearch
