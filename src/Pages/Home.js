import React from 'react'
import AdBanner from '../Components/AdBanner/AdBanner'
import Banner from '../Components/Banner/Banner'
import Category from '../Components/Category/Category'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Home() {
  return (
    <div className='homeParentDiv'>
        <Header/>
        <Banner/>
        <AdBanner/>
        <Category/>
        <Footer/>
      
    </div>
  )
}

export default Home
