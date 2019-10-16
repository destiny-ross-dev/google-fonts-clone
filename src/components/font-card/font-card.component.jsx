import React from "react";
import Helmet from "react-helmet";
import Card from "./font-card.styles";

const FontCard = ({ displayText, fontSize, fontFamily, data }) => {
  console.log(fontFamily);
  return (
    <Card.Container fontSize={fontSize} fontFamily={fontFamily}>
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${fontFamily}&display=swap"`}
          rel="stylesheet"
        />
      </Helmet>
      <Card.TitleBar>
        <h2>{fontFamily}</h2>
        <i className="fas fa-plus-circle"></i>
      </Card.TitleBar>
      <p>{displayText}</p>
    </Card.Container>
  );
};
export default FontCard;
