import styled from "styled-components";

export const Wrapper = styled.div`
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
