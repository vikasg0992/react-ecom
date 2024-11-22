import React from 'react'
import style from '../RelatedProducts/RelatedProducts.module.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className={style.container}>
        <div className={style.related_products}>
            <h1>Related Products</h1>
            <hr />
            <div className={style.related_products_item}>
                {data_product.map((item,i)=>{
                    return (
                        <Item key ={i} id={item.id} name={item.name} image={item.image} 
                            new_price={item.new_price} old_price = {item.old_price}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default RelatedProducts