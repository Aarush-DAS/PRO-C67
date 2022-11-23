import firebase from 'firebase';
import { initializeApp } from "firebase/app";
// add SDK Firebase
var firebaseConfig = {
    
    apiKey: "AIzaSyC0LIhq09VqgpSkUpQWbg4uUNczt9dhiaY",
    authDomain: "pro-c67-43647.firebaseapp.com",
    projectId: "pro-c67-43647",
    storageBucket: "pro-c67-43647.appspot.com",
    messagingSenderId: "249480682990",
    appId: "1:249480682990:web:88479bebd905b63b4bc2ff"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();