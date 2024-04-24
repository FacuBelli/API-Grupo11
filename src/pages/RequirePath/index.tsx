import { useEffect, type ReactNode } from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export default function RequireAuth({ children }: Props) {
  const { isLogged } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/auth/login')
  }, [isLogged, navigate])

  return children
}
