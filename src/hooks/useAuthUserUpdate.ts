import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux'
import { authLogin } from '../redux/actions/authActions'

const useAuthUserUpdate = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const newUser = useSelector((state: RootState) => state.user.users.find((u) => u.id === user?.id))
  if (newUser && !Object.is(user, newUser)) {
    dispatch(authLogin(newUser))
  }
}

export default useAuthUserUpdate
