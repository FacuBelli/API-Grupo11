import type { User } from '../../types/database'

export enum UserActionTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT'
}

export const userLogin = (userData: User) => ({
  type: UserActionTypes.USER_LOGIN,
  payload: userData
})

export const userLogout = () => ({
  type: UserActionTypes.USER_LOGOUT
})
