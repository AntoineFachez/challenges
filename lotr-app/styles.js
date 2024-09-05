import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
export const lightTheme = {
  body: "#fff",
  text: "#333",
  // ... other styles
};

export const darkTheme = {
  body: "#333",
  text: "#fff",
  // ... other styles
};
