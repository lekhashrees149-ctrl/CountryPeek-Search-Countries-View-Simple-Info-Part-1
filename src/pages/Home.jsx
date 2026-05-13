import { useState } from 'react'
import './Home.css'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="home-page">
      <div className="home-header">
        <h2>Search Countries</h2>
        <p>Find and explore information about countries around the world</p>
      </div>
      
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
          aria-label="Search countries"
        />
        {searchQuery && (
          <div className="search-query-display">
            <p>Searching for: <strong>{searchQuery}</strong></p>
          </div>
        )}
      </div>

      <div className="home-content">
        <section className="info-section">
          <h3>How to use CountryPeek</h3>
          <ul>
            <li>Enter a country name in the search box above</li>
            <li>Browse through the results</li>
            <li>Click on a country to view detailed information</li>
            <li>Add countries to your favourites for quick access</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home