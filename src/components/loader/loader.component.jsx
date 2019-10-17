import React from "react";
import LoaderStyles from "./loader.styles";

const Loader = () => {
  return (
    <LoaderStyles.Wrapper>
      <div class="blue ball"></div>
      <div class="red ball"></div>
      <div class="yellow ball"></div>
      <div class="green ball"></div>
    </LoaderStyles.Wrapper>
  );
};

export default Loader;
