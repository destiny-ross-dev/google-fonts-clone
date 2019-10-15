import React from "react";
import HeaderStyles from "./header.styles";

const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Logo>
        <span className="blue">G</span>
        <span className="red">o</span>
        <span className="yellow">o</span>
        <span className="blue">g</span>
        <span className="green">l</span>
        <span className="red">e</span> Fonts
      </HeaderStyles.Logo>
      <HeaderStyles.Nav>
        <HeaderStyles.NavList>
          {/* TODO: Include rrd and convert these to NavLinks, 
        not necessary until adding saved/favorited font page */}
          <HeaderStyles.NavItem className="active">
            Catalog
          </HeaderStyles.NavItem>
          <HeaderStyles.NavItem className="disabled" title="Coming soon">
            Featured
          </HeaderStyles.NavItem>
          <HeaderStyles.NavItem className="disabled">
            Articles
          </HeaderStyles.NavItem>
          <HeaderStyles.NavItem className="disabled">
            About
          </HeaderStyles.NavItem>
        </HeaderStyles.NavList>
      </HeaderStyles.Nav>
    </HeaderStyles.Container>
  );
};

export default Header;
