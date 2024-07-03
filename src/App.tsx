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
import RequireAuth from './pages/RequireAuth'
import { useDispatch, useSelector } from 'react-redux'
import Logout from './pages/Logout'
import { useEffect } from 'react'
import { artworkAdd } from './redux/actions/artworkActions'
import type { RootState } from './redux'
import Auth from './pages/Auth'
import { favoriteAdd } from './redux/actions/favoriteActions'

function App() {
  const dispatch = useDispatch()

  const { isLogged, auth } = useSelector((state: RootState) => state.auth)
  const isArtworkLoaded = useSelector((state: RootState) => state.artwork.isLoaded)
  const isFavoriteLoaded = useSelector((state: RootState) => state.favorite.isLoaded)

  useEffect(() => {
    if (!isArtworkLoaded) {
      fetch('http://localhost:8080/artwork')
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            console.log(data)
            data.forEach((artwork) => {
              dispatch(artworkAdd(artwork))
            })
          }
        })
        .catch((err) => console.error(err))
    }

    if (isLogged && !isFavoriteLoaded) {
      fetch(`http://localhost:8080/user/${auth.user!.id}/favorite`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            console.log(data)
            data.forEach((favorite) => {
              dispatch(favoriteAdd(favorite))
            })
          }
        })
        .catch((err) => console.error(err))
    }
  }, [dispatch, isArtworkLoaded, auth.user, isLogged, isFavoriteLoaded])

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
        <Route path="/auth" element={<Auth />}>
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
        {/* <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        /> */}
      </Routes>
    </>
  )
}

export default App
