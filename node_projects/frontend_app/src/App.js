import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ContactList from './components/ContactList'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar d-flex bg-primary">
          <ul>
            <li>
              <div className="leftContainer">
                {' '}
                <Link
                  style={{ textDecoration: 'none', fontWeight: '600' }}
                  to="/"
                >
                  Home
                </Link>{' '}
                <Link
                  style={{ textDecoration: 'none', fontWeight: '600' }}
                  to="/contacts"
                >
                  Contacts
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  )
}

export default App
