import styled from "styled-components";

const Container = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 64px 0 60px;
  border-bottom: ${props => props.theme.border};
  z-index: 12;
`;

const Logo = styled.h1`
  font-size: 22px;
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
`;

const Nav = styled.nav`
  width: 1000px;
  display: flex;
  align-items: center;
`;
const NavItem = styled.li`
  font-family: "Roboto";
  text-transform: uppercase;
  list-style: none;
  margin-left: 32px;
  &.active {
    color: ${props => props.theme.accent};
    cursor: pointer;
  }
  &.disabled {
    cursor: not-allowed;
  }
`;
const NavList = styled.ul`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const Button = styled.button`
  background: ${props => props.theme.accent};
  color: white;
  padding: 8px 12px;
  border-radius: 2px;
  border: none;
  margin-left: 24px;
  :hover {
    background: ${props => props.theme.dark};
  }
`;

const HeaderStyles = { Container, Logo, Nav, NavItem, NavList, Button };

export default HeaderStyles;
