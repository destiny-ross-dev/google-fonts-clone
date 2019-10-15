import styled from "styled-components";

const Container = styled.div`
  display: flex;
  z-index: 1;

  & p {
    font-size: ${props => props.fontSize};
  }
`;

const FontListStyles = {
  Container
};

export default FontListStyles;
