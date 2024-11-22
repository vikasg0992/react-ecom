import React from 'react'
import style from '../DescriptionBox/DescriptionBox.module.css'

const DescriptionBox = () => {
  return (
    <div className={style.container}>
        <div className={style.descriptionbox}>
            <div className={style.descriptionbox_navigator}>
                <div className={style.descriptionbox_nav_box}>Description</div>
                <div className={`${style.descriptionbox_nav_box} ${style.fade}`}>Reviews (22) </div>
            </div>
            <div className={style.descriptionbox_description}>
                <p>E-commerce (Electronic Commerce) refers to the buying and selling of goods or 
                services over the internet. It involves online transactions, digital payments, and 
                electronic delivery of goods and services. E-commerce has transformed the way businesses
                operate, enabling them to reach a global audience, reduce operational costs, 
                and provide customers with a seamless shopping experience.</p>
                <p>E-commerce is an ever-evolving industry, driven by advancements in technology and 
                changing consumer behavior. Whether you're a small entrepreneur or a large corporation, 
                having an e-commerce presence is essential in today's digital world.</p>
            </div>
        </div>
    </div>
  )
}

export default DescriptionBox