import React, { useContext } from "react";

//context
import { AppContext } from "../AppContext";

//styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  number: number;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  number,
}) => {
  const ctx = useContext(AppContext);

  return (
    <Wrapper>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={ctx.userAnswers[number]?.correctAnswer === answer}
              userClicked={ctx.userAnswers[number]?.answer === answer}
            >
              <button
                disabled={!!ctx.userAnswers[number]}
                value={answer}
                onClick={callback}
              >
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
