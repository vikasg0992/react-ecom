import React, { useContext } from 'react';
import style from '../CartItem/CartItem.module.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    // Debugging logs
    console.log('all_product:', all_product);
    console.log('cartItems:', cartItems);
    return (
        <div className={style.cartitem}>
            <div className={style.cartitem_format_main}>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                        <div className={`${style.cartitem_format} ${style.cartitem_format_main}`}>
                                <img
                                    src={product.image} // Ensure this matches your data
                                    alt={product.name}
                                    className={style.carticon_product_icon}
                                />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className={style.cartitems_quantity}>
                                    {cartItems[product.id]}
                                </button>
                                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(product.id)}
                                    alt="Remove item"
                                    className={style.remove_icon}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Explicitly return null for products with 0 quantity
            })}

            <div className={style.cartitems_down}>
                <div className={style.cartitems_total}>
                    <h1>Cart Total</h1>
                    
                    <div>
                    <div className={style.cartitems_total_item}>
                        <p>Sub Total</p>
                        <p>${getTotalCartAmount}</p>
                    </div>
                    <hr />
                    <div className={style.cartitems_total_item}>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className={style.cartitems_total_item}>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount}</h3>
                    </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
               
                <div className={style.cartitem_promocode}>
                <p>If you have promocode Enter Here</p>
                <div className={style.cartitem_promobox}>
                    <input type='text' placeholder='Enter Promocode' />
                    <button>Submit</button>
                </div>
            </div>
            </div>

           

        </div>
    );
};

export default CartItem;
