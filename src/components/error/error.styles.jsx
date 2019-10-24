import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  padding: 0 200px;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: start;

  img {
    height: 400px;
  }

  div {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  font-size: 48px;
  cursor: pointer;
  text-shadow: rgba(0, 0, 0, 0.14);
  & span.blue {
    color: #4285f4;
  }
  & span.red {
    color: #ea4335;
  }
  & span.yellow {
    color: #fbbc05;
  }
  & span.green {
    color: #34a853;
  }
  & span.grey {
    color: ${props => props.theme.border};
    text-decoration: none;
  }
`;

const ErrorPageStyles = {
  Container,
  Logo
};

export default ErrorPageStyles;
