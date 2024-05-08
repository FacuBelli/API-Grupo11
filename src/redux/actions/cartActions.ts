import type { CartItem } from '../../types/database'
import type { CustomAction } from '../../types/redux'

export enum CartActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  INCREASE_CART_ITEM = 'INCREASE_CART_ITEM',
  DECREASE_CART_ITEM = 'DECREASE_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
}

export const cartItemAdd = (CartItemData: Omit<CartItem, 'id'> & Partial<Pick<CartItem, 'id'>>): CustomAction<CartItem> => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: {
    body: CartItemData
  }
})

export const cartItemIncrease = (id: CartItem['id']): CustomAction<CartItem> => ({
  type: CartActionTypes.INCREASE_CART_ITEM,
  payload: {
    id,
  }
})

export const cartItemDecrease = (id: CartItem['id']): CustomAction<CartItem> => ({
  type: CartActionTypes.DECREASE_CART_ITEM,
  payload: {
    id,
  }
})

export const cartItemRemove = (id: CartItem['id']): CustomAction<CartItem> => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: {
    id
  }
})
