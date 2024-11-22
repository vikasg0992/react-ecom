import React from 'react'
import styles from '../Breadcrumbs/Breadcrum.module.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product}  = props;
  return (
    <div className={styles.container}>
        <div className={styles.breadcrum}>
            HOME <img src={arrow_icon} alt='' /> 
            SHOP <img src={arrow_icon} alt='' />
            {product.category} <img src={arrow_icon} alt='' />
            {product.name}
        </div>
    </div>
  )
}

export default Breadcrum