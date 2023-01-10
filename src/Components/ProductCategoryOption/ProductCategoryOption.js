import React from 'react'
import "./ProductCategoryOption.css"

function ProductCategoryOption() {
  return (
    <div className='parentProductCategoryOption'>
        <h3 className='parentProductCategoryOption_Heading'>Category</h3>
        <div className='options'>
        <input type="checkbox" className="category_checkbox" name="dresses" value="dresses"/>
        <label className="categoryName"for="dresses">Dresses</label><br></br>
        <input type="checkbox" className="category_checkbox" name="footwear" value="footwear"/>
        <label className="categoryName" for="footwear">Footwear</label><br></br>
        <input type="checkbox" className="category_checkbox" name="dresses" value="dresses"/>
        <label className="categoryName" for="dresses">Tops</label><br></br>
        <input type="checkbox" className="category_checkbox" name="dresses" value="dresses"/>
        <label className="categoryName" for="dresses">Jeans</label><br></br>
        <input type="checkbox" iclassNamed="category_checkbox" name="dresses" value="dresses"/>
        <label className="categoryName" for="dresses">Jumpsuit</label><br></br>
  
        </div>
      
    </div>
  )
}

export default ProductCategoryOption
