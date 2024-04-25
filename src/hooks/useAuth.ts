import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../redux'
import db from '../utils/database'
import { validateInput } from '../utils/validation'
import { userLogin } from '../redux/actions/userActions'


const useAuth = () => {
  const dispatch = useDispatch()

  return {
    ...useSelector((state: RootState) => state.user),
    login: (email: string, password: string) => {
      const { isValid: isValidEmail, message: messageEmail } = validateInput('email', email)
      if (!isValidEmail) throw new Error(messageEmail)

      const { isValid: isValidPassword, message: messagePassword } = validateInput('password', password)
      if (!isValidPassword) throw new Error(messagePassword)

      const user = db.users.find((user) => user.email === email && user.password === password)
      if (user === undefined) throw Error('User not found.')

      dispatch(userLogin(user))
    },
    register: () => {
      // register
    }
  }
}


export default useAuth
