import React, {useContext} from 'react'
import "./ShoppingBag.css"
import CartContext from '../../cartContext'

function ShoopingBag() {
  const {cart, setCart, removeFromCart} = useContext(CartContext);
  const qtyChanged = (value, id) => {
    console.log(value, id);
    setCart(current => 
      current.map(obj => {
        if(obj.product_id === id) {
          return {...obj, qty : value}
        }
        return obj;
      })  
    )
  }
  {cart.map((product) => {
    console.log('Product', product.product_name)
  })}
  return (
    <div className='ParentShoppingBag'>
      <h4 className='ParentShoppingBag_heading'>SHOPPING BAG</h4>
      {cart.map((product) => {
        return(
      <div className="ShoppingCartProductDetials">
        <div className="ShoppingCartImage" style={{marginRight: '4%'}}>
          <img className="productimage_shopping"
            src={product.image} />
        </div>
        <div className="ShoopingCartDescription">
          <h5>{product.product_name}</h5>
          <p className='ShoppingCartPrice'>Price: <b>£{product.product_price * product.qty}</b></p>
        </div>
         <div className="shoppingcartCountRemove">
          <select name="count" className="count" value={product.qty} onChange={(e) => qtyChanged(e.target.value, product.product_id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <h6 style={{textAlign : "center"}} className='shoppingcartCount_Remove' onClick={() => removeFromCart(product)}>REMOVE</h6>
         </div>
      </div>
        );
       })}
    </div>
  )
}

export default ShoopingBag
