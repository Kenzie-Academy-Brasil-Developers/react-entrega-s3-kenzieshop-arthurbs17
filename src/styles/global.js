import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, h1, h2, h3, h4, h5, h6, a, img, ul, li{
        margin: 0;
        padding: 0;
        font-family: 'Gemunu Libre', sans-serif;
    }
    body{
        background: #FFFFF0;
    }
`;

export default GlobalStyle;
