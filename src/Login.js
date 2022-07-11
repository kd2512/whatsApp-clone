import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import WhatsApp from "./images/WhatsApp.png";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer.js";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    console.log("Inside sign in function");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login_container'>
        <img src={WhatsApp} alt='WhatsApp logo' />
        <div className='login_text'>
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
