import styled from "styled-components";

import { SharedLayout } from "../shared_styles";

export const Wrapper = styled(SharedLayout)`
  justify-content: space-evenly;

  input {
    height: 2rem;
    line-height: 2rem;
    border-radius: 5px;
    border: 2px solid #008583;
    outline: none;
    padding: 0 0.5rem;
  }
`;

export const InsideWrapper = styled.div`
  height: clamp(55%, 60%, 70%);
  width: 60%;
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;

  max-width: 1100px;
  background: rgba(235, 254, 255, 0.7);
  border-radius: 10px;
  border: 2px solid #008583;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    min-height: auto;
    width: 90%;
  }
`;
