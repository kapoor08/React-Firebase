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
  apiKey: "AIzaSyBvDo5AjXmIPftBFKQw8Gt1RazGR5StxsU",
  authDomain: "fir-basics-1226f.firebaseapp.com",
  projectId: "fir-basics-1226f",
  storageBucket: "fir-basics-1226f.appspot.com",
  messagingSenderId: "326739863283",
  appId: "1:326739863283:web:d3d97cfd713b3e6ca37986",
  measurementId: "G-XZRYQKZ00B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const store = getStorage(app);
// const analytics = getAnalytics(app);
