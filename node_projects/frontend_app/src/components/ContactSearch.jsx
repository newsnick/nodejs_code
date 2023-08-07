import React, { useState } from 'react'

const ContactSearch = ({ onSearch }) => {
  const [searchName, setSearchName] = useState('')

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const handleSearchClick = (event) => {
    event.preventDefault()
    onSearch(searchName)
  }

  return (
    <div className="container-fluid">
      <form class="d-flex" role="search">
        {' '}
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter name..."
          aria-label="Search"
          value={searchName}
          onChange={handleSearchChange}
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default ContactSearch
