import React from "react";
import FontListStyles from "./font-list.styles";

const FontList = ({ displayText, fontSize }) => {
  return (
    <FontListStyles.Container fontSize={fontSize}>
      <p>{displayText}</p>
    </FontListStyles.Container>
  );
};

export default FontList;
