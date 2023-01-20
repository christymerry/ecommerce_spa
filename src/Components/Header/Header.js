import React, {useContext} from 'react'
import './Header.css';
import CartContext from '../../cartContext';
import { Navigate, useNavigate } from 'react-router-dom';



function Header() {
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);
  return (
    
    <div className="headerParentDiv">
        <div className="headerChildDiv">
            <ul className="topbar">
                <li onClick={() => navigate("/Account")}>My Account </li>
                <li>Rewards</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Contact</li>
            </ul>



            <div className="main">
                <div className="logo">
                    <img className='logoImage'
                        src="../../../Images/logo.png" 
                        alt="" onClick={() => navigate("/")}
                    />
                </div>
                <div className="search Search" >
                    
                    <input type="text" placeholder="Enter product..." name="search" className='search_text' />
                    <button type="submit" className='submit' >SEARCH</button>
                </div>
                <div className="cart">
                    <button type="submit" className='cart_button' onClick={() => navigate("/Cart")}>CART({cart.length})</button>
                </div>
            </div>
            <div className="main-tablet">
                <div className="main-tablet-logo-cart">
                <div className='main-left-section'>
                <i class="fa fa-bars"></i>

                <div className="logo">
                    <img className='logoImage'
                        src="../../../Images/logo.png"
                        alt="" onClick={() => navigate("/")}
                    />
                </div>
                </div>
                <div className="cart">
                    <button type="submit" className='cart_button' onClick={() => navigate("/Cart")}>CART({cart.length})</button>
                </div>
                </div>
                <div className="search Search" >
                    
                    <input type="text" placeholder="Enter product..." name="search" className='search_text' />
                    <button type="submit" className='submit' >SEARCH</button>
                </div>
                
            </div>
            <div className="navbar">
                <ul className="navbar_list">
                    <li>Home</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Christmas</li>
                    <li>Boys</li>
                    <li>Girls</li>
                    <li >Contact Us</li>
                    <li>Trending</li>
                </ul>
            </div>
            
            
            
        </div>
    </div>
  
  )
}

export default Header
