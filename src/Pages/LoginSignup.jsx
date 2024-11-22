import React from 'react'
import styles from '../Pages/CSS/LoginSignup.module.css'

 const LoginSignup = () => {
  return (
    <div className={styles.logingsignup}>
        <div className={styles.loginisgnup_container}>
          <h1>Sign UP</h1>
          <div className={styles.loginsignup_fields}>
              <input type='text' placeholder='Enter Your Name' />
              <input type='email' placeholder='Enter Your Email' />
              <input type='password' placeholder='Enter Your Password' />
          </div>
          <button>Continue</button>
          <p className={styles.loginsignup_para}>Already have an account <span>Login</span></p>
          <div className={styles.signup_agree}>
            <input type='checkbox' name ='' id='' />
            <p>By Continuing, i agree to the terms of use & Privacy Policy.</p>
          </div>
        </div>
    </div>
  )
}


export default LoginSignup