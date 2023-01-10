import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ShopCart from '../Components/ShopCart/ShopCart'

function Cart() {
  return (
    <div className='ParentCart'>
        <Header/>
        <ShopCart/>
        <Footer/>
    </div>
  )
}

export default Cart
