import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1 id='title'>Stranger's Things</h1>
      <Link to="/">Home</Link> |{' '}
      <Link to="/posts">Posts</Link> |{' '}
      <Link to="/login">Login</Link> |{' '}
      <Link to="/register">Register</Link>
    </div>
  );
};

export default NavBar;
