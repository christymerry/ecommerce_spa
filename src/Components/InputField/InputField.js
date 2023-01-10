import React from 'react'
import "./InputField.css"

function InputField(props) {
  return (
    <div className='parentInputField'>
        <p className='inputFieldName'>{props.inputName +":"}</p>
        <input value={props.value} type = {props.type==="password" ? "password" : "text" } onChange={(e) => props.onChange(e.target.value)} placeholder={props.placeholder} name="search" className='search_text_Input' />
      
    </div>
  )
}

export default InputField
