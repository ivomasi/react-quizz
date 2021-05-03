import React from "react";

//types
import { AnswerObject } from "../Quiz/Quiz";

//styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
}) => {
  return (
    <Wrapper>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
