import React, {useContext} from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ShopCart from '../Components/ShopCart/ShopCart'
import CartContext from '../cartContext'

function Cart() {
  const {cart} = useContext(CartContext);
  return (
    <div className='ParentCart'>
        <Header/>
        <ShopCart data={cart} />
        <Footer/>
    </div>
  )
}

export default Cart
