import React,{createContext, useState,useEffect} from 'react'
import all_product from '../Components/Assets/all_product'


export  const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
    }

const ShopContextProvider  = (props)=>{
    const[cartItems,setCartItems] = useState(getDefaultCart());
    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        console.log(cartItems); // Verify the updated cartItems
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevent negative cart values
        }));
    };
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };


    const  contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
  

    return (
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}

export default ShopContextProvider;