import React from "react";
import "./notFound.scss";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="error__page">
      <span className="error__img__container">
        <img src="/images/error.png" alt="error" />
      </span>
      <p>Oops! The page you are looking for isn’t exists. </p>
      <Link to={`/`} className="home__link">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
