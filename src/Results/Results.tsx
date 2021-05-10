import React, { useContext } from "react";

//router
import { useHistory } from "react-router-dom";

//context
import { AppContext } from "../AppContext";

//components
import ActionButton from "../components/ActionButton";

//styles
import { Wrapper, ListItemWrapper } from "./Results.styles";

const Results = () => {
  const ctx = useContext(AppContext);

  const history = useHistory();
  return (
    <Wrapper>
      <h2>Those are your results {ctx.name}</h2>
      <ul>
        {ctx.userAnswers.map((answer, i) => {
          return (
            <ListItemWrapper key={i} correct={answer.correct}>
              <article>
                <h2>
                  <span className="question_nr">{answer.questionNr}. </span>
                  {answer.question}
                </h2>
                <p className="your_answer">
                  <span>Your Answer: </span>
                  <br />
                  {answer.answer}
                </p>
                {!answer.correct && (
                  <p>
                    <span>Correct Answer:</span> <br />
                    {answer.correctAnswer}
                  </p>
                )}
              </article>
            </ListItemWrapper>
          );
        })}
      </ul>
      <ActionButton text={"Try Again"} callback={() => history.push("/")} />
    </Wrapper>
  );
};

export default Results;
