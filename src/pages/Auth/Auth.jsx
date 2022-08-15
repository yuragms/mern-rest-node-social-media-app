import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>YuraGms Media</h1>
          <h6>Explore the ideas throught the world</h6>
        </div>
      </div>

      <LogIn />
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up!
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First name"
            name="firstname"
            className="infoInput"
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastname"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Usernames"
            name="username"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmpass"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
