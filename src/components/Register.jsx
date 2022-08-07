import React from "react";
import { registerUser } from "../api";



const Register = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    registerUser(username, password);
  }
  return (
    <div id="register">
      <form onSubmit={handleSubmit} id= 'register-form'>
        <h1 id="register-header"> Sign up for an account.</h1>
        <label>Username</label>
        <input type='text' id='username' placeholder='create username...'></input>
        <label>Password</label>
        <input type='password' id='password' placeholder='create password...'></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
