import type { PayloadAction, Reducer } from '@reduxjs/toolkit'
import type { Artwork } from '../../types/database'
import { ArtworkActionTypes } from '../actions/artworkActions'
import type { CustomPayload } from '../../types/redux'

interface ArtworkReducer {
  artworks: Artwork[]
  isLoaded: boolean
}

const initialState: ArtworkReducer = {
  artworks: [],
  isLoaded: false
}

const artworkReducer: Reducer<ArtworkReducer, PayloadAction<CustomPayload<Artwork>, keyof typeof ArtworkActionTypes>> =
  (state = initialState, action) => {
    switch (action.type) {
    case ArtworkActionTypes.ADD_ARTWORK: {
      if (!action.payload.body) return state
      return {
        artworks: [...state.artworks, {
          id: action.payload.body.id ?? state.artworks.length + 1,
          artist_id: action.payload.body.artist_id,
          category: action.payload.body.category,
          description: action.payload.body.description,
          image: action.payload.body.image,
          orientation: action.payload.body.orientation,
          price: action.payload.body.price,
          style: action.payload.body.style,
          theme: action.payload.body.theme,
          title: action.payload.body.title,
          stock: action.payload.body.stock
        }],
        isLoaded: true,
      }
    }
    case ArtworkActionTypes.EDIT_ARTWORK: {
      if (!state.isLoaded || !action.payload.id || !action.payload.body) return state
      return {
        ...state,
        artworks: state.artworks.map((artwork) => {
          if (artwork.id === action.payload.id) {
            return {
              ...artwork,
              ...action.payload.body
            }
          }
          return artwork
        })
      }
    }
    case ArtworkActionTypes.REMOVE_ARTWORK: {
      if (!state.isLoaded || !action.payload.id) return state
      return {
        ...state,
        artworks: state.artworks.filter((artwork) => artwork.id !== action.payload.id)
      }
    }
    default: {
      return state
    }
    }
  }

export default artworkReducer
