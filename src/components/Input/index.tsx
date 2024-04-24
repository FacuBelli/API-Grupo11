import { type SvgIconTypeMap } from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'
import {
  type MouseEvent,
  createContext,
  useContext,
  useState,
  type ChangeEvent,
  type DetailedHTMLProps
} from 'react'
import { Report, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import useForm from '../../hooks/useForm'

export type InputAssistance = {
  message: string
  to: string
}

export type InputError = {
  message: string
  validate: (value: string, formElements?: HTMLFormControlsCollection) => boolean
}

interface Props
  extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: 'text' | 'email' | 'password'
  icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string
  } // MaterialUI Icon Component
  iconPosition?: 'start' | 'end'
  assistance?: InputAssistance
  errorValidation?: InputError | InputError[]
}

const InputPropsContext = createContext<
  DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>({})

const InputErrorContext = createContext<
  Pick<Props, 'errorValidation'> & {
    setIsValid: (value: boolean) => void
    setErrorMessage: (value: string) => void
  }
>({
  errorValidation: undefined,
  setIsValid: () => {},
  setErrorMessage: () => {}
})

export default function Input({
  type,
  icon,
  iconPosition,
  assistance,
  errorValidation,
  ...inputProps
}: Props) {
  const Icon = icon
  const isIconStart = Icon !== undefined && (iconPosition === 'start' || iconPosition === undefined)
  const isIconEnd = Icon !== undefined && iconPosition === 'end'

  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState('error message')

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isIconStart && <Icon className={styles.icon} />}
        <InputErrorContext.Provider value={{ errorValidation, setIsValid, setErrorMessage }}>
          <InputPropsContext.Provider value={{ ...inputProps }}>
            {type === 'text' && <TextInput />}
            {type === 'email' && <EmailInput />}
            {type === 'password' && <PasswordInput />}
          </InputPropsContext.Provider>
        </InputErrorContext.Provider>
        {!isValid && <Report className={styles.icon} />}
        {isIconEnd && <Icon className={styles.icon} />}
      </div>
      {!isValid && <p className={styles.error}>{errorMessage}</p>}
      {assistance !== undefined && (
        <Link to={assistance.to} className={styles.assistance}>
          {assistance.message}
        </Link>
      )}
    </div>
  )
}

function DefaultInput({ type }: { type: 'text' | 'email' | 'password' }) {
  const form = useForm()
  const inputProps = useContext(InputPropsContext)
  const { errorValidation, setIsValid, setErrorMessage } = useContext(InputErrorContext)
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    inputProps.onChange && inputProps.onChange(e)
  }

  const onBlur = () => {
    if (errorValidation === undefined) return

    const handleError = (error: InputError) => {
      const isValid = error.validate(value, form)
      setIsValid(isValid)
      setErrorMessage(isValid ? '' : error.message)
      return isValid
    }

    if (!Array.isArray(errorValidation)) {
      handleError(errorValidation)
    } else {
      for (let i = 0; i < errorValidation.length; i++) {
        const valid = handleError(errorValidation[i])
        if (!valid) break
      }
    }
  }

  return (
    <>
      <input
        className={styles.input}
        type={type}
        {...inputProps}
        onChange={(e) => onChange(e)}
        onBlur={onBlur}
      />
    </>
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
