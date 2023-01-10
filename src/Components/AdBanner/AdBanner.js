import React from 'react'
import "./AdBanner.css"


function AdBanner() {
  return (
    <div className="ad">
                <div class="ad1">
                    <img className='ad1'
                        src="../../../Images/ad1.png"
                        alt=""
                    />
                    <p className='ad_text'>Grab 30% off selected lines from our Christmas Shop, including gifting, toys, decoration and homeware! Get festive for less right now!</p>

                </div>
                <div class="ad2">
                    <img className='ad2'
                        src="../../../Images/ad2.png"
                        alt=""
                    />
                    <p className='ad_text'>Treat your little ones to happy feet for less! Grab 30% off all kids' footwear, including snuggly slippers to keep them cosy this Winter.</p>

                </div>
            </div>
  )
}

export default AdBanner
