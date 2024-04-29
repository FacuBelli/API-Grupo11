import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const { isLogged, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      logout()
    }

    navigate('/')
  }, [isLogged, logout, navigate])

  return <></>
}
