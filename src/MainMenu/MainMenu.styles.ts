import styled from "styled-components";

export const InsideWrapper = styled.div`
  background: transparent;
  color: white;
  height: clamp(60%, 65%, 70%);
  border-radius: 10px;
  border: 2px solid #008583;
  padding: 1rem;
  width: 95%;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  justify-content: space-evenly;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
`;
