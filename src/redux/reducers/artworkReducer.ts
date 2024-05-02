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
          category_id: action.payload.body.category_id,
          description: action.payload.body.description,
          image: action.payload.body.image,
          orientation_id: action.payload.body.orientation_id,
          price: action.payload.body.price,
          style_id: action.payload.body.style_id,
          theme_id: action.payload.body.theme_id,
          title: action.payload.body.title,
          is_sold: action.payload.body.is_sold
        }],
        isLoaded: true,
      }
    }
    case ArtworkActionTypes.EDIT_ARTWORK: {
      if (!state.isLoaded || !action.payload.id || !action.payload.body) return state
      const artwork = state.artworks.find((artwork) => artwork.id === action.payload.id)
      if (artwork === undefined) return state
      artwork.artist_id = action.payload.body.artist_id ?? artwork.artist_id
      artwork.category_id = action.payload.body.category_id ?? artwork.category_id
      artwork.description = action.payload.body.description ?? artwork.description
      artwork.image = action.payload.body.image ?? artwork.image
      artwork.orientation_id = action.payload.body.orientation_id ?? artwork.orientation_id
      artwork.price = action.payload.body.price ?? artwork.price
      artwork.style_id = action.payload.body.style_id ?? artwork.style_id
      artwork.theme_id = action.payload.body.theme_id ?? artwork.theme_id
      artwork.title = action.payload.body.title ?? artwork.title
      artwork.is_sold = action.payload.body.is_sold ?? artwork.is_sold
      return state
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
