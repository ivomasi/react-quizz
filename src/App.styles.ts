import { createGlobalStyle } from "styled-components";
import BGimage from "./images/bg-image.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background-image: url(${BGimage});
        background-size: auto 100%;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center
    }

    * {
        box-sizing: border-box;
        font-family: "Catamaran", sans-serif;
    }
`;
