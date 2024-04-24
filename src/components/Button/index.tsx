import type { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  to?: string
}

export default function Button({ children, onClick, to, ...buttonProps }: Props) {
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick !== undefined) {
      onClick(e)
    }
    if (to !== undefined) {
      navigate(to)
    }
  }

  return (
    <button className={styles.button} onClick={(e) => handleClick(e)} {...buttonProps}>
      {children}
    </button>
  )
}
