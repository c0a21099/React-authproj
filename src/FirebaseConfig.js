/* FirebaseConfig.js */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZEBzm1KAvUzDG0V_CU2-2VrQHSQdiTa0",
    authDomain: "react-auth-knish.firebaseapp.com",
    projectId: "react-auth-knish",
    storageBucket: "react-auth-knish.appspot.com",
    messagingSenderId: "761383463186",
    appId: "1:761383463186:web:d60b78c22e7dc387a6ebcb"
  };

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);