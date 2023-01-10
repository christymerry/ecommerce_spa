import React, {useContext} from 'react'
import './Header.css';
import CartContext from '../../cartContext';


function Header() {
    const {cart} = useContext(CartContext);
  return (
    
    <div className="headerParentDiv">
        <div className="headerChildDiv">
            <ul className="topbar">
                <li>My Account</li>
                <li>Rewards</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Contact</li>
            </ul>



            <div className="main">
                <div className="logo">
                    <img className='logoImage'
                        src="../../../Images/logo.png"
                        alt=""
                    />
                </div>
                <div className="search">
                    
                    <input type="text" placeholder="Enter product..." name="search" className='search_text' />
                    <button type="submit" className='submit' >SEARCH</button>
                </div>
                <div className="cart">
                    <button type="submit" className='cart_button' >CART({cart.length})</button>
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
