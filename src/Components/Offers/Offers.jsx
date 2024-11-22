import React from 'react'
import styles from './Offers.module.css'
import exclusive_img from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className={styles.container}>
        <div className={styles.offers}>
            <div className={styles.offers_left}>
                <h1>Exclusive</h1>
                <h1>Offers Only For You</h1>
                <p>ONLY ON BESTSELLER PRODUCT FOR YOU</p>
                <button>Check More</button>
            </div>
            <div className={styles.offers_right}>
                <img src={exclusive_img} alt='offer_right' />
            </div>
        </div>
    </div>
  )
}

export default Offers