import { type SvgIconTypeMap } from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'
import { createContext, useContext, useState } from 'react'
import styles from './styles.module.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface Props {
  type: 'text' | 'email' | 'password'
  name: string
  placeholder?: string
  required?: boolean
  icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string
  } // MaterialUI Icon Component
  iconPosition?: 'start' | 'end'
}

const InputPropsContext = createContext<Pick<Props, 'name' | 'placeholder' | 'required'>>({
  name: '',
  placeholder: '',
  required: false
})

export default function Input({ type, name, placeholder, required, icon, iconPosition }: Props) {
  const Icon = icon
  const isIconStart = (iconPosition === 'start' || iconPosition === undefined) && Icon !== undefined
  const isIconEnd = iconPosition === 'end' && Icon !== undefined

  return (
    <div className={styles.container}>
      {isIconStart && <Icon className={styles.icon} />}
      <InputPropsContext.Provider value={{ name, placeholder, required }}>
        {type === 'text' && <TextInput />}
        {type === 'email' && <EmailInput />}
        {type === 'password' && <PasswordInput />}
      </InputPropsContext.Provider>
      {isIconEnd && <Icon className={styles.icon} />}
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

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>    
      <DefaultInput type={isVisible ? 'text' : 'password'} />
      <button onClick={toggleVisibility}>
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
