import React from 'react'
import "./ShoppingBag.css"

function ShoopingBag() {
  return (
    <div className='ParentShoppingBag'>
      <h4 className='ParentShoppingBag_heading'>SHOPPING BAG</h4>
      <div className="ShoppingCartProductDetials">
        <div className="ShoppingCartImage">
        <img className="productimage_shopping"
          src="../../../Images/dress5_1.png"/>

        </div>
         <div className="ShoopingCartDescription">
          <h5>Girls on Film Animal Print Mock Wrap Mini Dress</h5>
          <p className='ShoppingCartPrice'>Price: <b>£190.00</b></p>
         </div>
         
         <div className="shoppingcartCountRemove">
         <select name="count" className="count">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        <h6 className='shoppingcartCount_Remove'>REMOVE</h6>
         </div>
         

      </div>
      <div className="ShoppingCartProductDetials">
        <div className="ShoppingCartImage">
        <img className="productimage_shopping"
          src="../../../Images/dress2_1.png"/>

        </div>
         <div className="ShoopingCartDescription">
          <h5>Girls on Film Animal Print Mock Wrap Mini Dress</h5>
          <p className='ShoppingCartPrice'>Price: <b>£190.00</b></p>
         </div>
         
         <div className="shoppingcartCountRemove">
         <select name="count" className="count">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        <h6 className='shoppingcartCount_Remove'>REMOVE</h6>
         </div>
         

      </div>
    </div>
  )
}

export default ShoopingBag
