import React from "react";
import { NavBar } from "./index.js";

//THIS IS AN API CALL
export const Cohort = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${Cohort}`;

async function registerPerson(event) {
  const registerUsername = event.target[0].value;
  const registerPassword = event.target[1].value;
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: registerUsername,
        password: registerPassword,
      },
    }),
  });
  const result = await response.json();
  const token = result.data.token;
  localStorage.setItem("token", token);
}

//^^ ENDING OF API CALL
async function handlSubmit(event) {
  event.preventDefault();
  console.log("Hello EVENT");
  registerPerson(event);

  console.log("Hello handleSubmit");
}

const App = () => {
  return (
    <div>
      <NavBar />

      <form onSubmit={handlSubmit}>
        <label>User name</label>
        <input id='username' placeholder='Username Here'></input>
        <label>Password</label>
        <input id='password' placeholder='Password Here'></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default App;
