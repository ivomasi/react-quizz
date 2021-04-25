import React, { useState } from "react";

//components
import QuestionCard from "./components/QuestionCard";

//api
import { fetchQuizQuestions } from "./API";

//types/enums

import { Difficulty, QuestionState } from "./API";

//styles
import { GlobalStyle, Wrapper, Shader } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

//app

function App() {
  //states
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<QuestionState[]>([]);

  const [number, setNumber] = useState(0);

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;

  //effect

  console.log(questions);

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
    } else {
      console.log("not correct");
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
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        )}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading...</p>}
        {!gameOver && !loading && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
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

export default App;
