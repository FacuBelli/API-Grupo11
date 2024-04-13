import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/index'
import Input from '../../components/Input'

export default function Register() {
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
          <form action="" className={styles.form}>
            <div className={styles.inputRow}>
              <Input name="firstName" type="text" placeholder="FIRST NAME" />
              <Input name="lastName" type="text" placeholder="LAST NAME" />
            </div>
            <Input name="email" type="email" placeholder="EMAIL" />
            <Input name="password" type="password" placeholder="PASSWORD" />
            <Input name="passwordRepeat" type="password" placeholder="REPEAT PASSWORD" />
            <Button to="/">REGISTER</Button>
          </form>
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
