import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/index'
import Input from '../../components/Input'
import { emailErrors } from '../../utils/validation'

export default function Login() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.panel}>
          <h1 className={styles.title}>
            <span>LOGIN TO YOUR ACCOUNT</span>
          </h1>
          <form className={styles.form}>
            <Input
              name="email"
              type="email"
              placeholder="EMAIL"
              required
              errorValidation={emailErrors}
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
            />
            <Button to="/">Log In</Button>
          </form>
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
