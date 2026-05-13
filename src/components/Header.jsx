import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>CountryPeek</h1>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favourites" className="nav-link">Favourites</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header