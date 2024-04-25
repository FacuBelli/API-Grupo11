import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../redux'
import db from '../utils/database'
import { validateInput } from '../utils/validation'
import { userLogin, userLogout } from '../redux/actions/userActions'

const useAuth = () => {
  const dispatch = useDispatch()

  const { user, isLogged } = useSelector((state: RootState) => state.user)

  const login = (email: string, password: string) => {
    const emailValidation = validateInput('email', email)
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.message)
    }

    // const passwordValidation = validateInput('password', password)
    // if (!passwordValidation.isValid) {
    //   throw new Error(emailValidation.message)
    // }

    const user = db.users.find((user) => user.email === email && user.password === password)
    if (user === undefined) throw new Error('User not found.')

    dispatch(userLogin(user))
  }

  const register = (firstName: string, lastName: string, email: string, password: string) => {
    const firstNameValidation = validateInput('firstName', firstName)
    console.log(firstNameValidation)
    if (!firstNameValidation.isValid) {
      throw Error(firstNameValidation.message)
    }

    const lastNameValidation = validateInput('lastName', lastName)
    if (!lastNameValidation.isValid) {
      throw new Error(lastNameValidation.message)
    }

    const emailValidation = validateInput('email', email)
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.message)
    }

    const passwordValidation = validateInput('password', password)
    if (!passwordValidation.isValid) {
      throw new Error(passwordValidation.message)
    }

    const user = {
      id: db.users.length,
      biography: '',
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      is_artist: false
    }

    db.users.push(user)
    dispatch(userLogin(user))
  }

  const logout = () => {
    dispatch(userLogout())
  }

  return {
    user,
    isLogged,
    login,
    register,
    logout
  }
}

export default useAuth
