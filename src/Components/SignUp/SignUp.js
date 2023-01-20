import React, { useState } from 'react'
import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import './SignUp.css'
import { useNavigate  } from 'react-router-dom';


function SignUp() {
  let navigate = useNavigate();
  const [email,setEmail]=useState('');
  
  
  const onChangeEmail = (val) => {
    setEmail(val);
  }
  const handlesignup=(e)=>{
    e.preventDefault();
    
    navigate("/CreateAccount",{state:{
      email1 : email
      
    }});
    
    }
  return (
    <div className='parentSignup'>
        <h2>New Customer</h2>
        <h3>Fill in a quick form to register your details with us.</h3>
        <InputField value={email} onChange={onChangeEmail}
        
        
        
        placeholder="Enter Email Address" inputName="EmailAddress"/>
        <Button onClick={handlesignup} buttonName="REGISTER" iconname="fa fa-lock"/>
    </div>
  )
}

export default SignUp
