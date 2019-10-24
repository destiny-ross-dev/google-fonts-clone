import React from "react";
import ErrorPageStyles from "./error.styles.jsx";

const ErrorPage = () => {
  return (
    <ErrorPageStyles.Container>
      <div>
        <ErrorPageStyles.Logo>
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span> Fonts
        </ErrorPageStyles.Logo>
        <h1>404 ERROR</h1>
        <p>This is just a clone! I haven't implemented all the features.</p>
      </div>
      <img
        src="https://ih1.redbubble.net/image.101121317.0149/pp,550x550.u2.jpg"
        alt="Google's error robot"
      />
    </ErrorPageStyles.Container>
  );
};

export default ErrorPage;
