import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useSearchParams } from 'react-router-dom'

interface Props {
  title: string
  options?: string[]
}

export default function Filter({ title, options = [] }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selected, setSelected] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (value: string) => {
    setSelected(value !== selected ? value : null)
  }

  useEffect(() => {
    const param = searchParams.get(title)
    setSelected(param)
  }, [searchParams, title])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    selected ? params.set(title, selected) : params.delete(title)
    setSearchParams(params)
  }, [selected, title, searchParams, setSearchParams])

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <KeyboardArrowDown />
        {selected !== null && <span className={styles.dot}></span>}
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((value, i) => {
            return (
              <div className={styles.option} key={i} onClick={() => handleClick(value)}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  value={value}
                  checked={value === selected}
                  onChange={() => handleClick(value)}
                />
                <p>{value}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
