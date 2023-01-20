import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevState) => [...prevState, {product}]);
    };
    
    return(
        <CartContext.Provider value={{cart, addToCart}}>{children}</CartContext.Provider>
    )
}

export default CartContext;