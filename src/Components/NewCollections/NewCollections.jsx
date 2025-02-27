import React from 'react'
import styles from './NewCollections.module.css'
import new_collection from '../Assets/new_collections'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className={styles.container}>
        <div className={styles.new_collection}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        
            <div className={styles.collections}>
                {new_collection.map((item,i)=>{
                    return <Item key ={i} id={item.id} name={item.name} image={item.image} 
                    new_price={item.new_price} old_price = {item.old_price}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default NewCollections