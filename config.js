// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('@firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDls31s7zHcVsKKUC0BGlWoHbzcncOokLo",
  authDomain: "willy-app-b0bd3.firebaseapp.com",
  projectId: "willy-app-b0bd3",
  storageBucket: "willy-app-b0bd3.appspot.com",
  messagingSenderId: "889359452021",
  appId: "1:889359452021:web:0896a5c64894ab5990353c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();