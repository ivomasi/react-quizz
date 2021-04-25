import styled, { createGlobalStyle } from "styled-components";
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

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 90vh;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 2rem;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Zen Dots", sans-serif;
    background-image: linear-gradient(180deg, white, #87f1ff);
    background-image: -webkit-linear-gradient(180deg, white, #87f1ff);
    background-image: -moz-linear-gradient(180deg, white, #87f1ff);
    background-image: -ms-linear-gradient(180deg, white, #87f1ff);
    background-image: -o-linear-gradient(180deg, white, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, #ffcc91);
    background: -webkit-linear-gradient(180deg, white, #ffcc91);
    background: -moz-linear-gradient(180deg, white, #ffcc91);
    background: -ms-linear-gradient(180deg, white, #ffcc91);
    background: -o-linear-gradient(180deg, white, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px auto;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
