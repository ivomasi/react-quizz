import styled from "styled-components";

import { SharedLayout } from "../shared_styles";

type WrapperProps = {
  loading: boolean;
};

export const Wrapper = styled(SharedLayout)<WrapperProps>`
  justify-content: ${({ loading }) => (loading ? "space-evenly" : "unset")};

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }
`;
