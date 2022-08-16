import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = () => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const myReturnInfo = await getUserInfo(token);
        console.log(myReturnInfo, "returned info from api call!");
        setMyInfo(myReturnInfo);
      }
      getMyInfo();
    }
  }, []);

  return (
    <div className='profile-box'>
      <h1 className='display-profile'>Welcome!</h1>
      <h3 className='messages'>Messages</h3>

      <div id='emptyMessages'> No Messages to Display</div>

      <h2 className='messages'>Messages Sent</h2>
    </div>
  );
};

export default Profile;
