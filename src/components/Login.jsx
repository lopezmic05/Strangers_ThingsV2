import React from "react";
import { loginUser } from "../api";

const Login = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        registerUser(username, password);
      }
    return ( 
        <div>
        <form onSubmit={handleSubmit} id= 'register-form'>
        <h1 id="register-header"> Please Sign In</h1>
        <label>Username</label>
        <input type='text' id='username' placeholder='enter username...'></input>
        <label>Password</label>
        <input type='password' id='password' placeholder='enter password...'></input>
        <button type='submit'>Submit</button>
      </form>
        </div>
     );
}
 
export default Login;