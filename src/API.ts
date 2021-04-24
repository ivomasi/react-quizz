//utils
import { shuffleArr } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

//adding another property to question, cuz question type is for fetching and it doesnt have answers property, but i need type for state in app with answers property as well
export type QuestionState = Question & { answers: string[] };

//fetch from trivia
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}`;

  const data = await fetch(endpoint);

  const response = await data.json();

  //can be written like this as well
  //const
  // const data = await (await fetch(endpoint)).json()

  return response.results.map((question: Question) => ({
    ...question,
    answers: shuffleArr([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
