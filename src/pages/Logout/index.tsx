import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../../redux'
import { authLogout } from '../../redux/actions/authActions'

export default function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (isLogged) {
      dispatch(authLogout())
    }

    navigate('/')
  }, [dispatch, navigate, isLogged])

  return <></>
}
