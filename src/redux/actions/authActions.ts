import type { User } from '../../types/database'

export enum AuthActionTypes {
  LOGIN_AUTH = 'LOGIN_AUTH',
  LOGOUT_AUTH = 'LOGOUT_AUTH'
}

export const authLogin = (authData: User) => ({
  type: AuthActionTypes.LOGIN_AUTH,
  payload: authData
})

export const authLogout = () => ({
  type: AuthActionTypes.LOGOUT_AUTH
})
