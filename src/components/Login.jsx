import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api";

import './login.css'

const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const token = await loginUser(username, password);
    token ? setIsLoggedIn(true) : false
    localStorage.setItem('username', username)
    localStorage.setItem("token", token);
    setUsername(username)
    navigate("/Profile");
  }
  return (
    <div className='login-box'>
      <form onSubmit={handleSubmit} id='login-form'>
        <h1 id='register-header'> Please Sign In</h1>
        <label>Username</label>
        <input
          type='text'
          onChange={handleOnChange}
          id='username'
          placeholder='enter username...'
          value={username}
        />
        <label>Password</label>
        <input
          type='password'
          id='password'
          onChange={handleOnChange}
          placeholder='enter password...'
          value={password}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
