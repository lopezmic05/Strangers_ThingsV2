import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar, Register, Login, Posts, Profile, CreateMessage} from "./";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [myInfo, setMyInfo] = useState([]);
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <NavBar
      isLoggedIn={isLoggedIn}
       setIsLoggedIn={setIsLoggedIn}
       setuserName={setuserName}
        setPassword={setPassword}
        />
        <div>
        {isLoggedIn ? (
      <Routes>
        <Route exact path='/profile' 
        element={<Profile 
        myInfo={myInfo} 
        setMyInfo={setMyInfo} />} />


        <Route path='/posts'
        element={<Posts
        posts={posts}
        setPosts={setPosts}
        myInfo={myInfo}
        setMyInfo={setMyInfo}
        isLoggedIn={isLoggedIn}
        username={username} />} />


        <Route path='/message'
        element={<CreateMessage
        username={username}
        setPosts={setPosts}
        posts={posts} />} />
        </Routes>
        ) : (
          <div>
            <Routes>
            <Route path='/login'
            element={<Login
            username={username}
            setuserName={setuserName}
            password={password}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn} />}/>

          <Route path='/register'
          element={<Register
          username={username}
          setuserName={setuserName}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
