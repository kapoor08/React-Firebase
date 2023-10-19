// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCkkQ31E-MIN1r6BUbaj3e2ajTFXY5GaHI",
  authDomain: "fir-basics-d3259.firebaseapp.com",
  projectId: "fir-basics-d3259",
  storageBucket: "fir-basics-d3259.appspot.com",
  messagingSenderId: "551201580574",
  appId: "1:551201580574:web:bc88dcef49a8ba6a7e700f",
  measurementId: "G-22G0DK7XRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const store = getStorage(app);
// const analytics = getAnalytics(app);

