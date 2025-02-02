// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyDx6slJH5iWeqCsP0WkheFNpn2jJdz57dM",
    authDomain: "assignment-831f1.firebaseapp.com",
    projectId: "assignment-831f1",
    storageBucket: "assignment-831f1.appspot.com",
    messagingSenderId: "522544028284",
    appId: "1:522544028284:web:4ca3dc36a038bf1adc07f9",
    measurementId: "G-39EWH50BLQ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);