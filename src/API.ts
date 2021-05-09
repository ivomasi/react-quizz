import axios from "axios";

//utils

import { shuffleArr } from "./utils";

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

//fetch questions from trivia
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
  category: number
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}&category=${category}`;

  const response = await axios.get(endpoint);

  //can be written like this as well
  //const
  // const data = await (await fetch(endpoint)).json()

  return response.data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArr([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

//fetch categories
export const fetchCategories = async () => {
  const endpoint = "https://opentdb.com/api_category.php";

  const response = await axios.get(endpoint);

  return response.data.trivia_categories;
};
