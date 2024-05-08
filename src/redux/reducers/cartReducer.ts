import type { PayloadAction, Reducer } from '@reduxjs/toolkit'
import type { CartItem } from '../../types/database'
import type { CustomPayload } from '../../types/redux'
import { CartActionTypes } from '../actions/cartActions'

interface CartReducer {
  cartItems: CartItem[]
  isLoaded: boolean
}

const initialState: CartReducer = {
  cartItems: [],
  isLoaded: false
}

const cartReducer: Reducer<CartReducer, PayloadAction<CustomPayload<CartItem>, keyof typeof CartActionTypes>> =
  (state = initialState, action) => {
    switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM: {
      if (!action.payload.body) return state
      return {
        cartItems: [...state.cartItems, {
          id: action.payload.id ?? state.cartItems.length + 1,
          user_id: action.payload.body.user_id,
          artwork_id: action.payload.body.artwork_id,
          quantity: action.payload.body.quantity
        }],
        isLoaded: true
      }
    }
    case CartActionTypes.INCREASE_CART_ITEM: {
      if (!state.isLoaded || !action.payload.id) return state
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              quantity: (cartItem.quantity ?? 0) + 1
            }
          }
          return cartItem
        })
      }
    }
    case CartActionTypes.DECREASE_CART_ITEM: {
      if (!state.isLoaded || !action.payload.id) return state
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              quantity: (cartItem.quantity ?? 0) > 0 ? (cartItem.quantity ?? 0) - 1 : 0
            }
          }
          return cartItem
        })
      }
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      if (!state.isLoaded || !action.payload.id) return state
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      }
    }
    default: {
      return state
    }
    }
  }

export default cartReducer
