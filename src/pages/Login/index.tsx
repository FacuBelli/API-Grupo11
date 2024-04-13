import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/index'

export default function Login() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.panel}>
          <h1 className={styles.title}>
            <span>LOGIN TO YOUR ACCOUNT</span>
          </h1>
          <form className={styles.form}>
            <input className={styles.input} type='email' placeholder='email' />
            <div className={styles.password}>
              <input className={styles.input} type='password' placeholder='password' />
              <Link to=''>Forgot your password?</Link> {/* hay que agregar el link para recuperar la contraseña */}
            </div>
            <Button to='/'>Log In</Button>
          </form>
          <div className={styles.linea}></div>
          <div className={styles.register}>
            <h2>
              <span>new to our gallery?</span>
            </h2>
            <Link to='/auth/register' className={styles.link}>
                <span>Sign Up</span> here to create an account and start exploring.
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
