import styled from "styled-components";

export const SharedLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 90vh;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 2rem;

  @media only screen and (max-width: 1000px) {
    height: auto;
  }
`;
