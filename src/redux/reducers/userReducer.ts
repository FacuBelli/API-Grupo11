import type { PayloadAction, Reducer } from '@reduxjs/toolkit'
import type { User } from '../../types/database'
import type { CustomPayload } from '../../types/redux'
import { UserActionTypes } from '../actions/userActions'

interface UserReducer {
  users: User[]
  isLoaded: boolean
}

const initialState: UserReducer = {
  users: [],
  isLoaded: false
}

const userReducer: Reducer<UserReducer, PayloadAction<CustomPayload<User>, keyof typeof UserActionTypes>> =
  (state = initialState, action) => {
    switch (action.type) {
    case UserActionTypes.ADD_USER: {
      if (!action.payload.body) return state
      return {
        users: [...state.users, {
          id: action.payload.body.id ?? state.users.length + 1,
          biography: action.payload.body.biography,
          email: action.payload.body.email,
          password: action.payload.body.password,
          first_name: action.payload.body.first_name,
          last_name: action.payload.body.last_name,
          is_artist: action.payload.body.is_artist,
          bought_artworks: action.payload.body.bought_artworks
        }],
        isLoaded: true,
      }
    }
    case UserActionTypes.EDIT_USER: {
      if (!state.isLoaded || !action.payload.id || !action.payload.body) return state
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload.body
            }
          }
          return user
        })
      }
    }
    case UserActionTypes.REMOVE_USER: {
      if (!state.isLoaded || !action.payload.id) return state
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id)
      }
    }
    default: {
      return state
    }
    }
  }

export default userReducer
