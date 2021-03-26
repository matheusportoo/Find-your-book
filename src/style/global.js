import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html { font-size: 62.5%; }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family-default);
    background-color: var(--color-black);
  }

  :root {
    /** fonts */
    --font-family-default: 'Lato', 'Arial', 'Sans-serif';
    --font-size-default: 10px;
  }
`;
