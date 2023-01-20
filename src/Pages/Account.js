import React from 'react'
import Banner from '../Components/Banner/Banner'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
import "./style.css"

function Account() {
  return (
    <div>
      <Header/>
      <div className="account">
        <Login/>
        <SignUp/>
      </div>
      <Footer/>

    </div>
  )
}

export default Account
