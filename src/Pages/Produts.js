import React, {useState, useEffect, useContext} from 'react'
import { collection, query, where, getDocs, doc, getDoc, orderBy } from "firebase/firestore";
import {firebase, db} from "../Firebase/Config";
import { useNavigate, useParams } from 'react-router-dom';
import BreadCrumps from '../Components/BreadCrumps/BreadCrumps'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ProductCategoryOption from '../Components/ProductCategoryOption/ProductCategoryOption'
import ProductDescription from '../Components/ProductDescription/ProductDescription'
import ProductImage from '../Components/ProductImage/ProductImage'
import './style.css'
import CartContext from '../cartContext';


function Produts() {
  const {cart} = useContext(CartContext);
  console.log('Cart Context',cart);
  const [products, setProducts] = useState([]);
  const { dept } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async() => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const productsData = [];
    const allProducts = querySnapshot.docs.map((product) => {
      let productDetails = {
        product_id : product.id,
        product_name : product.data().product_name,
        product_images : product.data().images,
        product_price : product.data().product_price,
        product_slug : product.data().product_slug
      }
      productsData.push(productDetails);
    });
    setProducts(productsData);
  }

  return (
    <div className='parentProducts'>
        <Header/>
        <BreadCrumps data="Womens"/>
        <div className='product'>
          <ProductCategoryOption/>
          <div class="productmain" style={{width : "90%", padding : "0 2rem"}}>
            <ProductDescription/>
            <ProductImage data={products}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Produts
