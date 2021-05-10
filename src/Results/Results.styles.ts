import styled from "styled-components";

import { SharedLayout } from "../shared_styles";

export const Wrapper = styled(SharedLayout)`
  height: unset;
  color: white;
  margin: 2rem 0;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

type LiItemProps = {
  correct: boolean;
};

export const ListItemWrapper = styled.li<LiItemProps>`
  width: 95%;
  min-height: 10rem;
  background: ${({ correct }) =>
    correct
      ? "linear-gradient(90deg, #2BD358, #25AB49)"
      : "linear-gradient(90deg, #ff5656, #c16868)"};
  border: 3px solid white;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: white;
  text-shadow: 0 1 0 rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  article {
    width: clamp(70%, 90%, 95%);

    h2 {
      .question_nr {
        font-family: sans-serif;
      }
    }

    .your_answer {
      border-bottom: ${({ correct }) => (!correct ? "2px solid white" : null)};
    }
  }
`;
