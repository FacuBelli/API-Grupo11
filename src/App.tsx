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
import RequireAuth from './pages/RequirePath'
import { useDispatch, useSelector } from 'react-redux'
import Logout from './pages/Logout'
import { useEffect } from 'react'
import db from './utils/database'
import { artworkAdd } from './redux/actions/artworkActions'
import type { RootState } from './redux'
import { userAdd } from './redux/actions/userActions'

function App() {
  const dispatch = useDispatch()
  const isArtworkLoaded = useSelector((state: RootState) => state.artwork.isLoaded)
  const isUserLoaded = useSelector((state: RootState) => state.user.isLoaded)

  useEffect(() => {
    // fetch the db.
    if (!isArtworkLoaded) {
      db.artworks.forEach((artwork) => {
        dispatch(artworkAdd(artwork))
      })
    }
    if (!isUserLoaded) {
      // fetch the db.
      db.users.forEach((user) => {
        dispatch(userAdd(user))
      })
    }
  }, [dispatch, isArtworkLoaded, isUserLoaded])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery">
          <Route index element={<Gallery />} />
          <Route path=":artworkId" element={<Artwork />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route
          path="/studio"
          element={
            <RequireAuth>
              <Studio />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/profile">
          <Route
            index
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          {/* <Route path="edit" element={<Profile />} /> */}
          <Route path=":userId" element={<Profile />} />
        </Route>
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default App
