import React, { useState } from "react";

//components
import QuestionCard from "../components/QuestionCard";
import Heading from "../components/Heading";

//api
import { fetchQuizQuestions } from "../API";

//types/enums

import { Difficulty, QuestionState } from "../API";

//styles
import { Wrapper } from "./Quiz.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

//app

function Quiz() {
  //states
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<QuestionState[]>([]);

  const [number, setNumber] = useState(0);

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;

  //effect

  //funcs

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
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

    setUserAnswers((userAnswers) => [...userAnswers, currentAnswer]);
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

  return (
    <>
      <Wrapper>
        <Heading text={`Question ${number + 1} / ${TOTAL_QUESTIONS}`} />
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        )}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading...</p>}
        {!gameOver && !loading && (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading &&
          !gameOver &&
          userAnswers.length === number + 1 &&
          number + 1 !== TOTAL_QUESTIONS && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default Quiz;
