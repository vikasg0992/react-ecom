import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.newsletter}>
            <h1>Get Exclusive Offer on Your Email</h1>
            <p>Subscribe to our newsletter and stay update</p>
            <div className={styles.input_btn}>
                <input type='email' placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter