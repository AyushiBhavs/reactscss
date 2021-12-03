import React from "react";

export default function UserFormContainer(props) {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="textcenter">
            <img
              className="logo"
              src="https://res.cloudinary.com/dr3osevsp/image/upload/v1624956639/Logo_wnpyel.png"
            />
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
}
