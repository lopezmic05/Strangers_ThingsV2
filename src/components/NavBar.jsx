import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

const NavBar = () => {
  return (
    <div id='nav-header'>
      <h1 id='title'>Stranger's Things</h1>
      <div id="links">
        <Link to='/' id='home'>
          Home
        </Link>
        <Link to='/profile' id='register'>
          Profile
        </Link>
        <Link to='/posts' id='post'>
          Posts
        </Link>
        <Link to='/login' id='login'>
          Login
        </Link>
        <Link to='/register' id='register'>
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
