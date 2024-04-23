import type { User } from '../types/database'
import db from '../utils/database'

const useUser = (id: User['id']): User | undefined => {
  return db.users.find((user) => user.id === id)
}

export default useUser
