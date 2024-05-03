import { useEffect } from 'react'
import type { RootState } from '../../redux'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Auth() {
  const navigate = useNavigate()
  const { isLogged } = useSelector((state: RootState) => state.auth)
  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged, navigate])
  return <Outlet />
}
