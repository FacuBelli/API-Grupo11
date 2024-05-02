import type { User } from '../../types/database'
import type { CustomAction } from '../../types/redux'

export enum UserActionTypes {
  ADD_USER = 'ADD_USER',
  EDIT_USER = 'EDIT_USER',
  REMOVE_USER = 'REMOVE_USER'
}

export const userAdd = (userData: Omit<User, 'id'> & Partial<Pick<User, 'id'>>): CustomAction<User> => ({
  type: UserActionTypes.ADD_USER,
  payload: {
    body: userData
  }
})

export const userEdit = (id: User['id'], userData: User): CustomAction<User> => ({
  type: UserActionTypes.EDIT_USER,
  payload: {
    id,
    body: userData
  }
})

export const userRemove = (id: User['id']): CustomAction<User> => ({
  type: UserActionTypes.REMOVE_USER,
  payload: {
    id
  }
})
