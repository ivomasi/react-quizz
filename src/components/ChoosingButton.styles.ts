import styled from "styled-components";

type ChoosingButtonStyleProps = {
  currentlySelected: string;
  value: string;
};

export const ChoosingButtonStyled = styled.button<ChoosingButtonStyleProps>`
  background-color: ${({ currentlySelected, value }) =>
    currentlySelected === value ? "red" : "white"};
`;
