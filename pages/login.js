import React from "react";
import { Button, TextField } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const authContext = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
  const [loginToggle, setLoginToggle] = useState(true);

  const handlesignup = (e) => {
    e.preventDefault();
    authContext.signup(emailRef.current.value, passRef.current.value);
  };

  const handlelogin = (e) => {
    e.preventDefault();
    authContext.signin(emailRef.current.value, passRef.current.value);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>{loginToggle ? "Log in" : "Sign Up"}</div>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          inputRef={emailRef}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          inputRef={passRef}
        />

        {loginToggle ? (
          <>
            <Button onClick={handlelogin} variant="contained">
              Log In
            </Button>
            <p>
              Don't have an account?
              <Button onClick={() => setLoginToggle(!loginToggle)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <Button onClick={handlesignup} variant="contained">
              Sign Up
            </Button>
            <p>
              Already have an account?
              <Button onClick={() => setLoginToggle(!loginToggle)}>
                Log In
              </Button>
            </p>
          </>
        )}
      </main>
    </div>
  );
}
