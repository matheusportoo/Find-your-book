import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html { font-size: 62.5%; } // 10 / 16

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family-default);
  }

  :root {
    /** fonts */
    --font-family-default: 'Roboto Slab', 'Arial', 'Sans-serif';
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-black: 900;

    /** colors */
    --color-dark: #111;
    --color-light: #f7f7f7;
    --color-white: #fff;
    --color-highlight: #17c9ff;
    --color-highlight-dark: #1754ff;

    /** header */
    --header-height: 85px;

    /** footer */
    --footer-height: 50px;
  }
`;
