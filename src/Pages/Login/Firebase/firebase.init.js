// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
const initializeFirebase = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}
export default initializeFirebase;