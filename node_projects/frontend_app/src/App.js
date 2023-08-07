import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ContactList from './components/ContactList'
import ContactSearch from './components/ContactSearch'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/search" element={<ContactSearch />} />
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <ContactList />
    // </div>
  )
}

export default App
