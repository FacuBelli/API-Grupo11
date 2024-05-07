import type { DetailedHTMLProps } from 'react'
import styles from './styles.module.css'

interface Props
  extends DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: string[]
  initialValue?: string
}

export default function Select({ options, initialValue, ...props }: Props) {
  return (
    <select className={styles.select} defaultValue={initialValue} {...props}>
      {options.map((value, i) => (
        <option className={styles.option} value={value} key={i}>
          {value}
        </option>
      ))}
    </select>
  )
}
