import "./ProductImage.css"
import React,{useContext, useEffect, useState} from 'react'
import ViewButton from "../ViewButton/ViewButton"

function ProductImage({data}) {
  console.log("Products Data", data);
  return (
    <div className="parentProductImage">
      <div className="parentProductImage1">
        {data.map((product) => {
          return(
        <div className="parentProductImage1_detail" key={product.product_slug}>
          <img className="productimage"
            src={product.product_images[0]}
            onMouseOver={e => (e.currentTarget.src = product.product_images[0])}
            onMouseOut={e => (e.currentTarget.src = product.product_images[1])}
            >
          </img>
          <p>{product.product_name}</p>
          <h3 className="product_price">£{product.product_price}</h3>
          <ViewButton product={product}/>
        </div>
          );
        })}
      </div>
        
      </div>
  )
}

export default ProductImage
