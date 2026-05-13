import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<div>Favourites Page (Coming Soon)</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App