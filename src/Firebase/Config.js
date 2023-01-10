import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0ZWuqlbbVrrWjsZugItAxiGWqojReFu4",
    authDomain: "ecommerce-ca02c.firebaseapp.com",
    projectId: "ecommerce-ca02c",
    storageBucket: "ecommerce-ca02c.appspot.com",
    messagingSenderId: "702682913678",
    appId: "1:702682913678:web:fcbd8141c0b2a3dedca2df",
    measurementId: "G-E6M170LHXN"
  };

  const firebase = initializeApp(firebaseConfig);
  const db = getFirestore(firebase);
  const auth = getAuth(firebase);
  export { firebase,db,auth };

  