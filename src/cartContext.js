import { createContext, useState } from "react";
const CartContext = createContext();
export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevState) => [...prevState, product]);
    };
    const removeFromCart = (product) => {
        setCart(current =>
            current.filter(obj => {
              return obj.product_id !== product.product_id;
            }),
        );
    } 
    return(
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>{children}</CartContext.Provider>
    )
}

export default CartContext;