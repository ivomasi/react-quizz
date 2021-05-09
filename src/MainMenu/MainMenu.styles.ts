import styled from "styled-components";

export const InsideWrapper = styled.div`
  min-height: clamp(60%, 65%, 70%);
  width: 95%;
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
  }
`;
