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
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
