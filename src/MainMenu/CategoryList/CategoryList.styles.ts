import styled from "styled-components";

export const ListOfCategories = styled.ul`
  color: white;
  overflow-y: scroll;
  list-style-type: none;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CategoryButton = styled.button`
  width: 100%;
  cursor: pointer;
  background: linear-gradient(90deg, #56ccff, #6eafb4);
  border: none;
  border-radius: 2px;
`;
