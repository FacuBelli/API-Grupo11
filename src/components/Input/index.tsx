import { type SvgIconTypeMap } from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'
import { type MouseEvent, createContext, useContext, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

type Props = {
  type: 'text' | 'email' | 'password'
  name: string
  placeholder?: string
  required?: boolean
  icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string
  } // MaterialUI Icon Component
  iconPosition?: 'start' | 'end'
  assistance?: {
    text: string
    to: string
  }
}

const InputPropsContext = createContext<Pick<Props, 'name' | 'placeholder' | 'required'>>({
  name: '',
  placeholder: '',
  required: false
})

export default function Input({
  type,
  name,
  placeholder,
  required,
  icon,
  iconPosition,
  assistance
}: Props) {
  const Icon = icon
  const isIconStart = Icon !== undefined && (iconPosition === 'start' || iconPosition === undefined)
  const isIconEnd = Icon !== undefined && iconPosition === 'end'

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isIconStart && <Icon className={styles.icon} />}
        <InputPropsContext.Provider value={{ name, placeholder, required }}>
          {type === 'text' && <TextInput />}
          {type === 'email' && <EmailInput />}
          {type === 'password' && <PasswordInput />}
        </InputPropsContext.Provider>
        {isIconEnd && <Icon className={styles.icon} />}
      </div>
      {assistance !== undefined && (
        <Link to={assistance.to} className={styles.assistance}>
          {assistance.text}
        </Link>
      )}
    </div>
  )
}

function TextInput() {
  return (
    <>
      <DefaultInput type="text" />
    </>
  )
}

function EmailInput() {
  return (
    <>
      <DefaultInput type="email" />
    </>
  )
}

function PasswordInput() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setIsVisible(!isVisible)
  }

  return (
    <>
      <DefaultInput type={isVisible ? 'text' : 'password'} />
      <button onClick={(e) => toggleVisibility(e)}>
        {isVisible ? (
          <VisibilityOff className={styles.icon} />
        ) : (
          <Visibility className={styles.icon} />
        )}
      </button>
    </>
  )
}

function DefaultInput({ type }: { type: 'text' | 'email' | 'password' }) {
  const { name, placeholder, required } = useContext(InputPropsContext)
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  )
}
