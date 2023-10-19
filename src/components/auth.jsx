import React, { useState } from "react";
import { auth } from "../config/Config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   console.log(auth?.currentUser?.email);

   //for users who are logged in using google, they have a photo URL
  //console.log(auth?.currentUser?.photoURL);

  //sign in button without google
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.alert(`Login successfully`);
        
    } catch (error) {
      console.log(error);
    }
  };

  const googleProvider = new GoogleAuthProvider();

  //sign in with google button
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  //logout button
  const logOut = async () => {
    try {
      await signOut(auth);
      window.alert(`Logout successfully`);
    } catch (error) {}
  };


  return (
    <div>
      <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>

      <button onClick={signIn}>Sign In</button>

      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Auth;
