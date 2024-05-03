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
      artwork.category = action.payload.body.category ?? artwork.category
      artwork.description = action.payload.body.description ?? artwork.description
      artwork.image = action.payload.body.image ?? artwork.image
      artwork.orientation = action.payload.body.orientation ?? artwork.orientation
      artwork.price = action.payload.body.price ?? artwork.price
      artwork.style = action.payload.body.style ?? artwork.style
      artwork.theme = action.payload.body.theme ?? artwork.theme
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
