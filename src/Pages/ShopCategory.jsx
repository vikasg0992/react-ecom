import React, { useContext } from 'react'
import styles from '../Pages/CSS/ShopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_img from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

 const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className={styles.shop_category}>
      <img className = {styles.shop_category_banner} src={props.banner} alt='' />
      <div className={styles.shop_category_index_sort}>
        <p>
          <span>Showing 1-11</span> Out of 36 Prodcuts
        </p>
        <div className={styles.shop_category_sort }>
          Sort By <img src={dropdown_img} alt='sort by'/>
        </div>
      </div>

      <div className={styles.container}>
            <div className={styles.shop_category_products}>
                {all_product.map((item,i)=>{
                  if (props.category===item.category){
                    return <Item key ={i} id={item.id} name={item.name} image={item.image} 
                          new_price={item.new_price} old_price = {item.old_price}/>
                  }
                  else {
                    return null;
                  }
                })}        
            </div>
      </div>

      <div className={styles.shopcategory_loadmore}>
         Explore More
      </div>

    </div>
  )
}

export default ShopCategory