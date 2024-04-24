import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/index'
import Input from '../../components/Input'
import {
  emailErrors,
  firstNameErrors,
  lastNameErrors,
  passwordErrors,
  repeatPasswordErrors
} from '../../utils/validation'
import Form from '../../components/Form'
import useAuth from '../../hooks/useAuth'
import { type FormEvent } from 'react'

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()

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

    if (password !== repeatPassword) return

    register(firstName, lastName, email, password)
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
