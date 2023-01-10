import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../../Store/FirebaseContext';
import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import "./Login.css"
import { useNavigate  } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,   } from "firebase/auth";

function Login() {
  let navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const{firebase}=useContext(FirebaseContext);
  const onChangeEmaillogin = (val) => {
    setEmail(val);
    
  }
  const onChangePassword = (val) => {
    setPassword(val);
    
  }
  //function to login with firebase
  function handleLogin(e){
    e.preventDefault();
    console.log(firebase);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      // alert("loggedIn")
      navigate('/');
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div className='parentLogin'>
      
        <h2 className='loginHeading'>Existing Customer</h2>
        <h3 className='parentLogin_heading'>Please enter your details below.</h3>
        <InputField value={email} onChange={onChangeEmaillogin} placeholder="Enter Email Address" inputName="EmailAddress"/>
        <InputField type="password" value={password} onChange={onChangePassword} placeholder="Enter Password" inputName="Password"/>
        <Button buttonName="LOGIN" iconname="fa fa-lock" onClick={handleLogin}/>
       

      
    </div>
  )
}

export default Login
