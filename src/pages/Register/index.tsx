import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/index'

export default function Register() {
  return (
    <main>
      <div className={styles.container}>
        <section className={styles.section}>
          <h1 className={styles.title}>
          CREATE YOUR ACCOUNT
          </h1>
          <div className={styles.confirmation}>
          <p>join out community of art enthusiast and creators by creating your account</p>
          </div>
          <form action='input' className={styles.form}>
            <input className={styles.input} type='text' placeholder='FIRST NAME' />
            <input className={styles.input} type='text' placeholder='LAST NAME' />
            <input className={styles.input} type='email' placeholder='email' />
            <input className={styles.input} type='password' placeholder='password' />
            <input className={styles.input} type='password' placeholder='REPEAT PASSWORD' />
            <div className={styles.button} >
              <Button to='/'>REGISTER</Button>
            </div>
            <div className={styles.confirmation}>
              <p>by registering, you agree to our terms of service and privacy policy </p>
            </div>
          </form>
          <div className={styles.linea}></div>
          <div>
            <h2>
              <span>already have an account?</span>
            </h2>
            <p>
              <Link to='/auth/login' className={styles.login}>
                Log In
              </Link>
              {' '} here to access your account.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
