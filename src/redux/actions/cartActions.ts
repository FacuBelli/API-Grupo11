import type { Order } from '../../types/database'
import type { CustomAction } from '../../types/redux'

export enum CartActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  INCREASE_CART_ITEM = 'INCREASE_CART_ITEM',
  DECREASE_CART_ITEM = 'DECREASE_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
}

export const orderAdd = (OrderData: Omit<Order, 'id'> & Partial<Pick<Order, 'id'>>): CustomAction<Order> => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: {
    body: OrderData
  }
})

export const orderIncrease = (id: Order['id']): CustomAction<Order> => ({
  type: CartActionTypes.INCREASE_CART_ITEM,
  payload: {
    id,
  }
})

export const orderDecrease = (id: Order['id']): CustomAction<Order> => ({
  type: CartActionTypes.DECREASE_CART_ITEM,
  payload: {
    id,
  }
})

export const orderRemove = (id: Order['id']): CustomAction<Order> => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: {
    id
  }
})
