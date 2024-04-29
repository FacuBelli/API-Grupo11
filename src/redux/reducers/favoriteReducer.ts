import type { PayloadAction, Reducer } from '@reduxjs/toolkit'
import type { Favorite } from '../../types/database'
import type { CustomPayload } from '../../types/redux'
import { FavoriteActionTypes } from '../actions/favoriteActions'

interface FavoriteReducer {
  favorites: Favorite[]
  isLoaded: boolean
}

const initialState: FavoriteReducer = {
  favorites: [],
  isLoaded: false
}

const favoriteReducer: Reducer<FavoriteReducer, PayloadAction<CustomPayload<Favorite>, keyof typeof FavoriteActionTypes>> =
  (state = initialState, action) => {
    switch (action.type) {
    case FavoriteActionTypes.ADD_FAVORITE: {
      if (!action.payload.body) return state
      return {
        favorites: [...state.favorites, {
          id: action.payload.body.id ?? state.favorites.length + 1,
          user_id: action.payload.body.user_id,
          artwork_id: action.payload.body.artwork_id
        }],
        isLoaded: true
      }
    }
    case FavoriteActionTypes.REMOVE_FAVORITE: {
      if (!state.isLoaded || !action.payload.id) return state
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== action.payload.id)
      }
    }
    default: {
      return state
    }
    }
  }

export default favoriteReducer
