import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Search from './pages/Search'
import Studio from './pages/Studio'
import Artwork from './pages/Artwork'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery">
          <Route index element={<Gallery />}/>
          <Route path=":artworkId" element={<Artwork />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/profile">
          <Route index element={<Profile />} />
          {/* <Route path="edit" element={<Profile />} /> */}
          <Route path="/profile/:userId" element={<Profile />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
