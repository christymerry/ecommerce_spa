import React, { useState, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext';
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useNavigate  } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import {  auth,db } from "../../Firebase/Config"
import InputField from '../InputField/InputField'
import './CreateAccount.css'

function CreateAccount() {
    let navigate = useNavigate();
    const {state} = useLocation();
    const{email1}= state;
    console.log(email1);
    const [email,setEmail]=useState(email1);
    const [password,setPassword]=useState('');
    const [firstName,setfirstName]=useState('');
    const [lastName,setlastName]=useState('')
    const [confirmEmail,setconfirmEmail]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')
    const{firebase}=useContext(FirebaseContext);
    const onChangeEmaillogin = (val) => {
        setEmail(val);
        
    }
    const onChangePassword = (val) => {
        setPassword(val);
        
    }
    const onChangefirstName = (val) => {
        setfirstName(val);
        
      }
      const onChangelastName = (val) => {
        setlastName(val);
        
      }
      const onChangeconfirmEmail=(val)=>{
        setconfirmEmail(val)

      }
      const onChangeconfirmPassword=(val)=>{
        setconfirmPassword(val)

      }    


const handleSubmitCreateAccount=(e)=>{
    if(email===confirmEmail && password===confirmPassword){
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((result)=> {
            console.log(result);
            updateProfile(auth.currentUser,
            {
                displayName : firstName
            })
            
            addToFirestore(result.user.uid).then(() => {
            navigate('/Account');
            })
        })
    
    
   
    
    }
    else{
        alert("wrong ")
        navigate('/Account');

    }
}
const addToFirestore = async (id) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        id: id,
        username:firstName+""+lastName
        
        
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <form onSubmit={handleSubmitCreateAccount}>
    
    <div className='parentCreateAcount'>
        <h2 className='parentCreateAcountTitle'>Create your account</h2>
        <p className='parentCreateAcount_desc'>We are delighted to have you as part of the family. All we ask is that you fill in the missing details highlighted in the form below:</p>
        <div className="accountdetails">
            <div className="accountdetails1">
                <InputField value={firstName} onChange={onChangefirstName} placeholder="First Name" inputName="First Name"/>
                <InputField value={email} onChange={onChangeEmaillogin} placeholder="Email Address" inputName="EmailAddress"/>
                <InputField value={password} onChange={onChangePassword} placeholder="Enter Password" inputName="Password"/>
            </div>
            <div className="accountdetails2">
                <InputField value={lastName} onChange={onChangelastName} placeholder="Last Name" inputName="Last Name"/>
                <InputField value={confirmEmail} onChange={onChangeconfirmEmail} placeholder="Confirm Email Address" inputName="Confirm Email Address"/>
                <InputField value={confirmPassword} onChange={onChangeconfirmPassword} placeholder="Confirm Password" inputName="Confirm Password"/>

            </div>
        </div>
        <div className='createAccountButton'>
            <button type="submit" className='createAccountButtonSubmit' >CREATE ACCOUNT</button>
        </div>

    </div>
    </form>
  )
  
}

export default CreateAccount
