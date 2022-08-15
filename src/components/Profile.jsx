import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = (props) => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});

  
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnInfo = await getUserInfo(token);
      console.log(myReturnInfo, "returned info from api call!");
      setMyInfo(myReturnInfo);
    }
    getMyInfo();
  }, []);

  return <div className='profile-box'>{`This is the Profile Component`}</div>;
};

export default Profile;
