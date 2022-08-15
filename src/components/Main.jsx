import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar, Home, Register, Login, Posts, Profile } from "./";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [myInfo, setMyInfo] = useState([]);

 

  return (
    <div>
      <NavBar/>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
