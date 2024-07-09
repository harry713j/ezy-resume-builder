import React from "react";
import google from "/google-svgrepo-com.svg";
import "./google.scss";

function GoogleLogo() {
  return (
    <div className="google__logo">
      <img src={google} alt="google" />
    </div>
  );
}

export default GoogleLogo;
