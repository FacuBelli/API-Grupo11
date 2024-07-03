import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/index'
import Input from '../../components/Input'
import { emailErrors, validateInput } from '../../utils/validation'
import Form from '../../components/Form'
import { type FormEvent } from 'react'
import { authLogin } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement
    const passwordInput = e.currentTarget.elements.namedItem('password') as HTMLInputElement

    const email = emailInput.value
    const password = passwordInput.value

    const emailValidation = validateInput('email', email)
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.message)
    }

    fetch('http://localhost:8080/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch(authLogin(data))})
      .catch((err) => console.error(err))

    navigate(-1)
  }

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.panel}>
          <h1 className={styles.title}>
            <span>LOGIN TO YOUR ACCOUNT</span>
          </h1>
          <Form onSubmit={(e) => handleLogin(e)} className={styles.form}>
            <Input
              name="email"
              type="email"
              placeholder="EMAIL"
              required
              errorValidation={emailErrors}
              defaultValue="user1@example.com"
            />
            <Input
              name="password"
              type="password"
              placeholder="PASSWORD"
              required
              assistance={{
                to: '',
                message: 'FORGOT YOUR PASSWORD?'
              }}
              defaultValue="password1"
            />
            <Button type="submit">Log In</Button>
          </Form>
          <div className={styles.linea}></div>
          <div className={styles.register}>
            <h2>
              <span>new to our gallery?</span>
            </h2>
            <Link to="/auth/register" className={styles.link}>
              <span>Sign Up</span> here to create an account and start exploring.
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
