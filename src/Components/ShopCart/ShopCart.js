import React from 'react'

import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import ShoopingBag from '../ShoppingBag/ShoppingBag'
import "./ShopCart.css"

function ShopCart() {
  return (
    <div className='ParentShopCart'>
        <div className="cartAddress">
        <h4>DELIVERY ADDRESS</h4>
        <InputField  placeholder="First Name" inputName="First Name"/>
        <InputField  placeholder="Last Name" inputName="Last Name"/>
        <InputField  placeholder="Mobile" inputName="Mobile"/>
        <InputField  placeholder="Postal Code" inputName="Postal Code"/>
        <InputField  placeholder="address" inputName="Address"/>
        <InputField  placeholder="Town/City" inputName="Town/City"/>
        <InputField  placeholder="Country" inputName="Country"/>
        <div className="cartaddressnextstep">
                    <button type="submit" className='nextstep' >NEXT STEP</button>
                </div>
        </div>
        <div className="cart">
          <ShoopingBag/>
          
            
        </div>
        <div className="cartaddressnextsteptablet">
        <button type="submit" className='nextsteptablet' >NEXT STEP</button>
        </div>

      
    </div>
  )
}

export default ShopCart
