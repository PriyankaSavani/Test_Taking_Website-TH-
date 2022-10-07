// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4cJ1yyF7hQhIZ_4IM044ZJaGHB9lhKBo",
    authDomain: "knowmeq-priyanka.firebaseapp.com",
    databaseURL: "https://knowmeq-priyanka-default-rtdb.firebaseio.com",
    projectId: "knowmeq-priyanka",
    storageBucket: "knowmeq-priyanka.appspot.com",
    messagingSenderId: "433783859175",
    appId: "1:433783859175:web:89ab92cd000f9e7151ff42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)