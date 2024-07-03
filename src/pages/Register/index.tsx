import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/index'
import Input from '../../components/Input'
import {
  emailErrors,
  firstNameErrors,
  lastNameErrors,
  passwordErrors,
  repeatPasswordErrors,
  validateInput
} from '../../utils/validation'
import Form from '../../components/Form'
import { type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { authLogin } from '../../redux/actions/authActions'

export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const firstNameInput = e.currentTarget.elements.namedItem('firstName') as HTMLInputElement
    const lastNameInput = e.currentTarget.elements.namedItem('lastName') as HTMLInputElement
    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement
    const passwordInput = e.currentTarget.elements.namedItem('password') as HTMLInputElement
    const repeatInput = e.currentTarget.elements.namedItem('repeatPassword') as HTMLInputElement

    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const repeatPassword = repeatInput.value

    const firstNameValidation = validateInput('firstName', firstName)
    console.log(firstNameValidation)
    if (!firstNameValidation.isValid) {
      throw Error(firstNameValidation.message)
    }

    const lastNameValidation = validateInput('lastName', lastName)
    if (!lastNameValidation.isValid) {
      throw new Error(lastNameValidation.message)
    }

    const emailValidation = validateInput('email', email)
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.message)
    }

    const passwordValidation = validateInput('password', password)
    if (!passwordValidation.isValid) {
      throw new Error(passwordValidation.message)
    }

    const repeatPassValidation = validateInput(
      'repeatPassword',
      repeatPassword,
      e.currentTarget.elements
    )
    if (!repeatPassValidation.isValid) {
      throw new Error(repeatPassValidation.message)
    }

    const user = {
      biography: '',
      email,
      password,
      firstName: firstName,
      lastName: lastName,
      isArtist: false
    }

    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => dispatch(authLogin(data)))
      .catch((err) => console.error(err))

    navigate('/')
  }

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.panel}>
          <h1 className={styles.title}>
            <span>CREATE YOUR ACCOUNT</span>
          </h1>
          <p className={styles.text}>
            join out community of art enthusiast and creators by creating your account
          </p>
          <Form onSubmit={(e) => handleRegister(e)} className={styles.form}>
            <div className={styles.inputRow}>
              <Input
                name="firstName"
                type="text"
                placeholder="FIRST NAME"
                errorValidation={firstNameErrors}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="LAST NAME"
                errorValidation={lastNameErrors}
              />
            </div>
            <Input name="email" type="email" placeholder="EMAIL" errorValidation={emailErrors} />
            <Input
              name="password"
              type="password"
              placeholder="PASSWORD"
              errorValidation={passwordErrors}
            />
            <Input
              name="repeatPassword"
              type="password"
              placeholder="REPEAT PASSWORD"
              errorValidation={repeatPasswordErrors}
            />
            <Button type="submit">REGISTER</Button>
          </Form>
          <p className={styles.confirmation}>
            by registering, you agree to our terms of service and privacy policy{' '}
          </p>
          <div className={styles.linea}></div>
          <div className={styles.login}>
            <h2>
              <span>already have an account?</span>
            </h2>
            <Link to="/auth/login" className={styles.link}>
              <span>Log In</span> here to access your account.
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
