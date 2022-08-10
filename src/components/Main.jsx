import React, {useState }from "react";
import { NavBar,Home, Register, Login, Posts} from "./";
import { Routes, Route, Link, } from "react-router-dom";


const Main = () => {
const [isLoggedIn, setIsLoggedIn] = useState()






  return (
    <div>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </div>
  );
};

export default Main;
