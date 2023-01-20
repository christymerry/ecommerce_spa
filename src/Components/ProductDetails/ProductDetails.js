import React, {useState, useContext} from 'react'
import Button from '../Button/Button'
import "./ProductDetails.css";
import CartContext from '../../cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({product}) {
  const {cart} = useContext(CartContext);
  const {addToCart, removeFromCart} = useContext(CartContext);

  const [qty, setQty] = useState(1);

  const onQtyChanged = (qty) => {
    setQty(qty);
  }

  const onCartClick = (product) => {
    let productDetails = {
      product_name: product.product_name,
      product_slug: product.product_slug,
      qty: qty,
      product_price: product.product_price,
      description: product.description,
      image: product.product_images[0],
      product_id : product.product_id
    };
    addToCart(productDetails);
    toast.success("Product Added!");
  }

  return (
    <div className='parentProductDetails'>
      <div className="childparentProductDetails1">
        <div className="productImages">
          <img className='image1' src={product.product_images[0]} alt=""/>
        </div>
        <div className="productalldetails">
          <h2 className='productalldetails_name'>{product.product_name}</h2>
          <h5 className="product_price">£{product.product_price} </h5>
          <div className="review">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          </div>
          <p className='product_detail_description'>{product.description}</p>
              <div className="addToBag">
                <div className="selectOption">
                {cart.some(e => e.product_id === product.product_id) ? '' :
                  <select name="count" value={qty} className="count_productdetails" onChange={(e) => onQtyChanged(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                }
                </div>
                <div className="button_addtocart">
                  {cart.some(e => e.product_id === product.product_id) ?
                  <Button btnType="remove" className="addtobag" buttonName="Remove From Cart" onClick={() => {removeFromCart(product); toast.error('Removed from Cart')}} iconname="fa fa-shopping-bag"/>
                    :
                  <Button className="addtobag" buttonName="ADD TO BAG" onClick={() => onCartClick(product)} iconname="fa fa-shopping-bag"/>
                  }
                </div>
              </div>
              <p className='condition'> <b>Free </b>standard home delivery on orders over £40</p> 
              <p className='condition'> <b> Free </b> delivery to store - with Click & Collect*</p> 
              <p className='condition'><b>Free </b> returns to store</p>
        </div>
      </div>
      <div className="childparentProductDetails2">
        <h2>Product Info</h2>
        <p className='childparentProductDetails2_detail'>{product.description}</p>
        <h5>Additional Details</h5>
        <p className="childparentProductDetails2_detail">100% Cotton</p>
        <h5>Care</h5>
        <p className="childparentProductDetails2_detail">Machine Washable</p>
        <h5>Share On</h5>
        <div className="shareSocialMedia">
          <a href="#" className='socialmediaicon' class="fa fa-facebook"></a>
          <a href="#" className='socialmediaicon' class="fa fa-twitter"></a>
          <a href="#" className='socialmediaicon' class="fa fa-google"></a>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductDetails
