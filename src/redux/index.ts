import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import artworkReducer from './reducers/artworkReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  artwork: artworkReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, etc. here if needed
})

export default store
