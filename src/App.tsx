import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Search from './pages/Search'
import Studio from './pages/Studio'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/search" element={<Search />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </>
  )
}

export default App
