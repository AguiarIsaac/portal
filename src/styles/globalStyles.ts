import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #111111;
    color: #e1e1e1;

    a {
      :focus {
        outline: 2px solid #0e73cc;
      }
    }

    button {
      :focus {
        outline: 2px solid #0e73cc;
      }
    }
  }
`