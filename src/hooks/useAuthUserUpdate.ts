import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux'
import { authLogin } from '../redux/actions/authActions'

const useAuthUserUpdate = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.auth.user)

  fetch('http://localhost:8080/user/' + user?.id)
    .then((res) => res.json())
    .then((newUser) => {
      if (newUser && !Object.is(user, newUser)) {
        dispatch(authLogin(newUser))
      }
    })
}

export default useAuthUserUpdate
