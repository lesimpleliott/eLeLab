import { useState } from "react";
import styled from "styled-components";
import Test from "./Test";
import "./theme.scss";

const App = () => {
  const [theme, setTheme] = useState("dark");
  document.body.setAttribute("data-theme", theme);

  const handleSwitchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <MainStyled>
      <h1>Theme Light / Dark</h1>
      <Test />
      <button onClick={handleSwitchTheme}>Theme switch</button>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  height: 100vh;
  width: 100%;
  margin: 20px 0px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  button {
    all: unset;
    cursor: pointer;
    margin-top: 50px;
    padding: 10px 20px;
    border-radius: 10px;
    background: var(--textColor);

    &:hover {
      background: var(--textColorHover);
    }
  }
`;

export default App;
