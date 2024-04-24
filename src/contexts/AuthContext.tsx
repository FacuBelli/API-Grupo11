import { type ReactNode, createContext, useState, useMemo } from 'react'
import type { User } from '../types/database'
import db from '../utils/database'

interface IAuthContext {
  user: User | null
  isLogged: boolean
  login: (email: string, password: string) => void
  register: (firstName: string, lastName: string, email: string, password: string) => void
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  isLogged: false,
  login: () => {},
  register: () => {}
})

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const isLogged = useMemo(() => user !== null, [user])

  const login = (email: string, password: string) => {
    const newUser = db.users.find((u) => u.email === email && u.password === password)
    if (newUser === undefined) throw new Error('User not found.')
    setUser(newUser)
  }

  const register = (firstName: string, lastName: string, email: string, password: string) => {
    db.users.push({
      id: db.users.length,
      biography: '',
      email,
      password,
      username: '',
      first_name: firstName,
      last_name: lastName,
      is_artist: false
    })
    login(email, password)
  }

  return (
    <AuthContext.Provider value={{ user, isLogged, login, register }}>
      {children}
    </AuthContext.Provider>
  )
}
