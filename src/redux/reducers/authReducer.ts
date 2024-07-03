import type { PayloadAction, Reducer } from '@reduxjs/toolkit'
import type { User } from '../../types/database'
import { AuthActionTypes } from '../actions/authActions'

interface AuthReducer {
  isLogged: boolean
  auth: {
    user: User | null
    token: string
  }
}

const initialState: AuthReducer = {
  isLogged: false,
  auth: {
    user: null,
    token: ''
  }
}

const userReducer: Reducer<
  AuthReducer,
  PayloadAction<{ user: User; token: string }, keyof typeof AuthActionTypes>
> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_AUTH: {
      return {
        isLogged: true,
        auth: {
          user: action.payload.user,
          token: action.payload.token
        }
      }
    }
    case AuthActionTypes.LOGOUT_AUTH: {
      return {
        isLogged: false,
        auth: {
          user: null,
          token: ''
        }
      }
    }
    default: {
      return state
    }
  }
}

export default userReducer
