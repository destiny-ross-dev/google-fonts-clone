import React from "react";
import HeaderStyles from "./header.styles";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import googleLogo from "../../googleLogo.png";
import { Link } from "react-router-dom";

const Header = ({
  setLogInOpen,
  logInOpen,
  user,
  setUser,
  token,
  setToken
}) => {
  const responseGoogle = response => {
    console.log(response);
    setUser(response.profileObj);
    setToken(response.tokenObj);
  };

  const logout = response => {
    console.log("log out", response);
    setUser({});
    setToken({});
  };
  return (
    <HeaderStyles.Container>
      <Link to="/">
        <HeaderStyles.Logo>
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
          <span className="grey"> Fonts</span>
        </HeaderStyles.Logo>
      </Link>
      <HeaderStyles.Nav>
        <HeaderStyles.NavList>
          <HeaderStyles.NavItem className="active">
            Catalog
          </HeaderStyles.NavItem>
          <HeaderStyles.NavItem
            to="/featured"
            className="disabled"
            title="Coming soon"
          >
            Featured
          </HeaderStyles.NavItem>
          <HeaderStyles.NavItem to="/articles" className="disabled">
            Articles
          </HeaderStyles.NavItem>
          <HeaderStyles.NavItem to="/about" className="disabled">
            About
          </HeaderStyles.NavItem>
          <HeaderStyles.ButtonContainer>
            {!user.googleId ? (
              <GoogleLogin
                clientId="513280164412-gjicu0r2juv75ijksusouqt75kqvgnrh.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                theme="dark"
                style={{ background: "#ff5252" }}
                render={renderProps => (
                  <HeaderStyles.Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src={googleLogo} alt="Google logo" /> Login With Google
                  </HeaderStyles.Button>
                )}
                // icon={false}
              />
            ) : (
              <GoogleLogout
                clientId="513280164412-gjicu0r2juv75ijksusouqt75kqvgnrh.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
                render={renderProps => (
                  <HeaderStyles.Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src={googleLogo} alt="Google logo" /> Logout
                  </HeaderStyles.Button>
                )}
              ></GoogleLogout>
            )}
          </HeaderStyles.ButtonContainer>
        </HeaderStyles.NavList>
      </HeaderStyles.Nav>
    </HeaderStyles.Container>
  );
};

export default Header;
