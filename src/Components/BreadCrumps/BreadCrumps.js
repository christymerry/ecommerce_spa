import React from 'react'
import "./BreadCrumps.css"

function BreadCrumps(props) {
  return (
    <div>
      <p className='breadCrumps'>Home {">"} {props.data}</p>
      
    </div>
  )
}

export default BreadCrumps
