import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ViewButton.css"

function ViewButton({product}) {
  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate(`/ProductDetail/${product.product_slug}`, {
      state : product
    });
  }
  return (
    <div className='parentViewButton'>
        <button type="submit" onClick={() => handleClick(product)} className='view_button'>VIEW</button>
    </div>
  )
}

export default ViewButton
