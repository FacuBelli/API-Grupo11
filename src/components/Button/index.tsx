import type { MouseEvent, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

interface Props {
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  to?: string
}

export default function Button({ children, onClick, to }: Props) {
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (onClick !== undefined) {
      onClick(e)
    }
    if (to !== undefined) {
      navigate(to)
    }
  }

  return (
    <button className={styles.button} onClick={(e) => handleClick(e)}>{ children }</button>
  )
}
