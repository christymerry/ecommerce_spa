import React from 'react'
import "./ShoppingBag.css"

function ShoopingBag() {
  return (
    <div className='ParentShoopingBag'>
      <h4>SHOPPING BAG</h4>
      <div className="ShoopingCartProductDetials">
        <div className="ShoopingCartImage">
        <img className="productimage"
          src="../../../Images/dress5_1.png"/>

        </div>
         <div className="ShoopingCartDescription">
          <h6>Girls on Film Animal Print Mock Wrap Mini Dress</h6>
          <p>Price: <b>£190.00</b></p>
         </div>
         <div className="shoppingcartCountRemove">
          <p>ggg</p>
         </div>

      </div>
    </div>
  )
}

export default ShoopingBag
