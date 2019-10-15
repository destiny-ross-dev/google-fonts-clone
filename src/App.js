import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header.component";
import Toolbar from "./components/toolbar/toolbar.component";
import GlobalStyle, { AppContainer, ToTopButton } from "./App.styles";
import FontList from "./components/font-list/font-list.component";

const lightTheme = {
  bg: "white",
  color: "rgba(0,0,0,.6)",
  accent: "#ff5252",
  bs: "0 4px 4px rgba(0,0,0,.06)",
  border: "1px solid rgba(0, 0, 0, 0.14)"
};

const darkTheme = {
  bg: "#1F1B24",
  color: "white",
  accent: "#ff5252",
  border: "1px solid white"
};

function App() {
  const [displayToTop, setDisplayToTop] = useState(false);
  const [toolbarFixedToTop, setFixedToTop] = useState(false);
  const [displayTextType, setDisplayTextType] = useState("sentence");
  const [displayText, setDisplayText] = useState(
    "Sphinx of black quartz, judge my vow."
  );
  const [fontSize, setFontSize] = useState("12px");
  const [themeIsLight, setThemeIsLight] = useState(true);
  const [listType, setListType] = useState("grid");

  useEffect(() => {
    window.addEventListener("scroll", logScroll);
    window.scrollY >= 88 && setFixedToTop(true);
    window.scrollY <= 88 && setFixedToTop(false);
    window.scrollY >= 88 && setFixedToTop(true);
    window.scrollY <= 88 && setFixedToTop(false);
  }, []);
  const logScroll = event => {
    window.scrollY < 120 && setDisplayToTop(false);
    window.scrollY >= 120 && setDisplayToTop(true);
    window.scrollY >= 88 && setFixedToTop(true);
    window.scrollY <= 88 && setFixedToTop(false);
  };

  const reset = () => {
    setDisplayTextType("sentence");
    setDisplayText("Sphinx of black quartz, judge my vow.");
    setFontSize("12px");
    setThemeIsLight(true);
    setListType("grid");
  };
  return (
    <ThemeProvider theme={themeIsLight ? lightTheme : darkTheme}>
      <AppContainer>
        <Header />
        <Toolbar
          toolbarFixedToTop={toolbarFixedToTop}
          displayTextType={displayTextType}
          setDisplayTextType={setDisplayTextType}
          displayText={displayText}
          setDisplayText={setDisplayText}
          fontSize={fontSize}
          setFontSize={setFontSize}
          reset={reset}
          themeIsLight={themeIsLight}
          setThemeIsLight={setThemeIsLight}
          listType={listType}
          setListType={setListType}
        />
        <FontList displayText={displayText} fontSize={fontSize} />
        {displayToTop && (
          <ToTopButton
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <i className="fal fa-arrow-to-top"></i>
          </ToTopButton>
        )}
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
