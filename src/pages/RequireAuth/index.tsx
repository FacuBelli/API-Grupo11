import { useEffect, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../../redux'

interface Props {
  children: ReactNode
}

export default function RequireAuth({ children }: Props) {
  const { isLogged } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/auth/login')
  }, [isLogged, navigate])

  return children
}
