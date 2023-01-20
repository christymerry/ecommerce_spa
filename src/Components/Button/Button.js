import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <div className='parentButton' >
        <div className='icon'><i class={props.iconname}></i></div>
        <button style={{backgroundColor: props.btnType == "remove" ? 'gray' : 'rgb(124, 18, 18)'}} type="submit" className='icon_button' onClick={props.onClick}>{props.buttonName}</button>
    </div>
  )
}

export default Button
