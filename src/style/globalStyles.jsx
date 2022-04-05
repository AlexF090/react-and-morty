import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%;
    width: 100vw;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background: #008000;
}



`;

export default GlobalStyle;
