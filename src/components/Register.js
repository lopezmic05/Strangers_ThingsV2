import { registerPerson } from "../api";

const Register = () => {
  return (
    <div>
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

export default Register;
