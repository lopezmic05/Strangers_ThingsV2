import React, { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
// import "./navbar.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn, setUsername, setPassword}) => {
  let navigate = useNavigate()


  const logout = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/')
    setUsername('')
    setPassword('')
  }
  return (
    <div id='nav-header'>
      <h1 id='title'>Stranger's Things</h1>
      {isLoggedIn ? (
        <div>
        <NavLink to='/posts' id='post'>
          Posts
        </NavLink>
        
        <NavLink to='/profile' id='profile'>
          Profile
        </NavLink>
        <button id="logout" onClick={logout}> Logout</button>
        </div>
      ): (
        <div>
        <NavLink to='/login' id='login'>
          Login
        </NavLink>
        </div>
      )}
      <div id="links">
        <NavLink to='/register' id='register'>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
