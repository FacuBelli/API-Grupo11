import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import Button from "../../components/Button/index"

export default function Register() {
  return (
    <main>
      <div className={styles.container}>
        <section className= {styles.section}>
          <h1> <span>CREATE YOUR ACCOUNT </span></h1>
          <form action="input" className={styles.form}>
            <input className={styles.input} type="text" placeholder='FIRST NAME' />
            <input className={styles.input} type="text" placeholder='LAST NAME' />
            <input className={styles.input} type="email" placeholder='email' />
            <input className={styles.input} type="password" placeholder='password' />
            <input className={styles.input} type="password" placeholder='REPEAT PASSWORD' /> 
            {/* <Button to="/" className={styles.button}>REGISTER</Button> */}
            <div style={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
           <Button to= "/">REGISTER</Button>
            </div>
            <p>by registering, you agree to pur terms of service and privacy politic </p>
          </form>
          <div className={styles.linea}></div>
          <div>
            <h2><span>already have an account?</span></h2>
            <p> <Link to='/auth/login' className={styles.login}> Log In</Link> here to access your account.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
