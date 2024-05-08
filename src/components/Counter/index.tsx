import { useState } from 'react'
import styles from './styles.module.css'
import { AddOutlined, DeleteOutline, RemoveOutlined } from '@mui/icons-material'

interface Props {
  initialValue?: number
  limit?: number
  onIncrease?: (count: number) => void
  onDecrease?: (count: number) => void
  onDelete?: () => void
}

export default function Counter({ initialValue, limit, onIncrease, onDecrease, onDelete }: Props) {
  const [count, setCount] = useState(initialValue ?? 1)

  const handleDecrease = () => {
    if (count === 1) return
    setCount(count - 1)
    onDecrease && onDecrease(count - 1)
  }

  const handleIncrease = () => {
    if (count === limit) return
    setCount(count + 1)
    onIncrease && onIncrease(count + 1)
  }

  return (
    <div className={styles.container}>
      {count !== 1 ? (
        <button onClick={handleDecrease}>
          <RemoveOutlined />
        </button>
      ) : (
        <button onClick={onDelete}>
          <DeleteOutline sx={{ strokeWidth: 0.6, stroke: '#FFF' }} />
        </button>
      )}
      <span>{count}</span>
      <button onClick={handleIncrease} disabled={count === limit}>
        <AddOutlined />
      </button>
    </div>
  )
}
