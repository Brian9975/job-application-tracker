import React from "react";
import "./index.css";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
export const Login = () => {
  const { setIsAuth, isAuth } = useContext(JobContext);
  const navigate = useNavigate();

  const logInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      navigate("/");
      setIsAuth(true), localStorage.setItem("isAuth", true);
    });
  }

  // const logInWithGoogle = () => {
  //   navigate("/")
  //   setIsAuth(true)
  //   localStorage.setItem("isAuth", true)
  // }

  if (isAuth) {
    return <Navigate to="/"/>
  } 
  // else {
  //   <Navigate to="/login"/>
  // }
  
  return (
    <div className="loginSection">
      <div className="loginCard">
        <p>Don't have an account?</p>
        <h3>Sign in With Google To Continue </h3>
        <div>
           <button onClick={logInWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};
