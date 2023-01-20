import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import ProductTab from '../Components/ProductTab/ProductTab'

function ProductDetail() {
  const {state} = useLocation();
  console.log('State', state);
  return (
    <div>
        <Header/>
        <ProductDetails product={state}/>
        <ProductTab/>
        <Footer/>
    </div>
  )
}

export default ProductDetail
