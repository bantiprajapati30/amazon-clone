/** @format */

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/amazon-login.svg";
import { auth } from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); //this is stop for the refresh page
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); //this is stop for the refresh page
    //register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login__wrapper">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <div className="container">
        <h1>Sign-in</h1>
        <form>
          <label>Email or mobile phone number</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            onClick={login}
            type="submit"
            className="primary-btn login-btn">
            Sign in
          </button>
        </form>
        <div>
          <small>
            By continuing, you agree to Amazon's{" "}
            <span className="text-blue">Conditions of Use </span>
            and <span className="text-blue">Privacy Notice</span>.
          </small>
          <small className="help text-blue">Need help?</small>
        </div>
      </div>

      <div className="new-account">
        <hr />
        <p>New to Amazon?</p>
        <button onClick={register} className="secondary-btn create-btn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
