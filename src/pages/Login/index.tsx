import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import Button from "../../components/Button/index"

export default function Login() {
  return (
    <main>
      <div className= {styles.container}>
      <section className={styles.section}>
        <h1> <span>LOGIN TO YOUR ACCOUNT </span></h1>
        <form action="input" className={styles.form}>
          <input className={styles.input} type="email" placeholder='email' />
          <input className={styles.input} type="password" placeholder='password' />
        </form>
        <p>Forgot your password?</p> {/* hay que agregar el link para recuperar la contraseña */}
        <Button to="/">Log In</Button>
        <div className={styles.linea}></div>
        <div>
          <h2><span>new to our gallery</span></h2>
          <p> <Link to='/auth/register' className={styles.signup}> Sign Up</Link> here to create an account and star exploring.</p>
        </div>
      </section>
      </div>
    </main>

  )

}
