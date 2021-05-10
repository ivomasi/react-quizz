import React, { useState, useContext, useEffect } from "react";

//components
import QuestionCard from "../components/QuestionCard";
import Heading from "../components/Heading";
import ActionButton from "../components/ActionButton";
import LoadingSpinner from "../components/LoadingSpinner";

//context
import { AppContext } from "../AppContext";

//router
import { useLocation, useHistory } from "react-router-dom";

//api
import { fetchQuizQuestions } from "../API";

//types/enums

import { QuestionState } from "../API";

//styles
import { Wrapper } from "./Quiz.styles";

//types
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type CatID = {
  id: number;
};

type LocationProps = {
  pathname: string;
  state: CatID;
};

function Quiz() {
  //states
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<QuestionState[]>([]);

  const [number, setNumber] = useState(0);

  /* const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]); */

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(true);

  //change to get mroe questions, but different categories combined with difficulty allows different amount of question, might change it later
  const TOTAL_QUESTIONS = 10;

  const ctx = useContext(AppContext);

  //need to get id of category from main menu to be fetched
  const location: LocationProps = useLocation();

  const history = useHistory();
  //effect

  useEffect(() => {
    startTrivia();
  }, []);

  //funcs

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const catID = location.state.id;
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      ctx.difficulty,
      catID
    );

    setQuestions(newQuestions);
    setScore(0);
    ctx.setUserAnswers([]);
    setNumber(0);

    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;

    //check if answer was correct
    const correct = questions[number].correct_answer === answer;

    //if it was, add score
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }

    //create user answer object and push to array, so it can be displayed at the and of quiz
    const currentAnswer: AnswerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };

    ctx.setUserAnswers((userAnswers: AnswerObject[]) => [
      ...userAnswers,
      currentAnswer,
    ]);
  };

  const nextQuestion = () => {
    //if its last qeustion, game over, implement review of quiz, else increment number so another question pops up

    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const finishGame = () => {
    history.push(`/${ctx.userID}/result`);
  };

  return (
    <>
      <Wrapper loading={loading}>
        <Heading text={`Question ${number + 1} / ${TOTAL_QUESTIONS}`} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {!gameOver && <p className="score">Score: {score}</p>}
            {!gameOver && !loading && (
              <QuestionCard
                question={questions[number].question}
                answers={questions[number].answers}
                number={number}
                callback={checkAnswer}
              />
            )}
            {!loading &&
            !gameOver &&
            ctx.userAnswers.length === number + 1 &&
            number + 1 !== TOTAL_QUESTIONS ? (
              <ActionButton text={"Next Question"} callback={nextQuestion} />
            ) : (
              ctx.userAnswers.length === TOTAL_QUESTIONS && (
                <ActionButton text={"Finish"} callback={finishGame} />
              )
            )}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default Quiz;
