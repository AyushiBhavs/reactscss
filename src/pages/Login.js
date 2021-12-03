import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import UserFormContainer from "../components/UserFormContainer";

export default function Login() {
  return (
    <>
      <Navbar />
      <UserFormContainer>
        <div className="login-main">
          <h1 className="login-heading textcenter">Welcome Back Login</h1>
          <h4 className="textcenter headingh4">
            Enter Your Credentials to access your account
          </h4>

          <form className="login form-margin">
            <div className="input-flex">
              <input
                type="text"
                placeholder="Enter your name"
                className="input-field input-text-fields"
              />
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className="input-flex">
              <input
                type="password"
                placeholder="Enter your password"
                className="input-field input-text-fields"
              />
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <input
              type="submit"
              value="Sign In"
              className="input-field submitbtn"
            />
          </form>
        </div>

        <h3 className="textcenter forgotlink">
          Forgot your password?
          <span className="resetPassword">&nbsp;Reset Password</span>
        </h3>
      </UserFormContainer>
    </>
  );
}
