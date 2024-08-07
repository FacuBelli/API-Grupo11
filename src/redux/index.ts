import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import artworkReducer from './reducers/artworkReducer'
import favoriteReducer from './reducers/favoriteReducer'
import cartReducer from './reducers/cartReducer'
const rootReducer = combineReducers({
  auth: authReducer,
  artwork: artworkReducer,
  favorite: favoriteReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, etc. here if needed
})

export default store
