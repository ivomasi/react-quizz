import styled from "styled-components";

type ChoosingButtonStyleProps = {
  currentlySelected: string;
  value: string;
};

export const ChoosingButtonStyled = styled.button<ChoosingButtonStyleProps>`
  background: ${({ currentlySelected, value }) =>
    currentlySelected === value
      ? "linear-gradient(90deg,#56ff84,#59dc86)"
      : "linear-gradient(90deg, #56ccff, #6eafb4)"};

  cursor: pointer;
  font-size: 0.8rem;
  width: 100%;
  height: 40px;
  margin: 5px 0;
  border: 3px solid white;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: white;
`;
