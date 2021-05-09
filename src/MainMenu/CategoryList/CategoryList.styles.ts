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
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 1000px) {
    height: 20rem;
  }
`;
