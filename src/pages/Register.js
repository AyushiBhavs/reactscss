import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import UserFormContainer from "../components/UserFormContainer";

export default function Register() {
  return (
    <>
      <UserFormContainer>
        <div className="register-main">
          <h1 className="register-heading textcenter ">Register</h1>
          <h4 className="textcenter headingh4">
            Enter Your Credentials to Create your account
          </h4>

          <form className="register form-margin">
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
            <div className="input-flex">
              <input
                type="password"
                placeholder="Enter your confirm password"
                className="input-field input-text-fields"
              />
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>

            <input
              type="submit"
              value="Sign Up"
              className="input-field submitbtn"
            />
          </form>
        </div>
      </UserFormContainer>
    </>
  );
}
