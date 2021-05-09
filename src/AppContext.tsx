import React, { ReactNode, useState } from "react";

type ContextProps = {
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;

  name: string;
  setName: (n: string) => void;
  userID: string;
  setUserID: (id: string) => void;
  difficulty: string;
  setDifficulty: (d: string) => void;
  userAnswers: AnswerObject[];
  setUserAnswers: (a: AnswerObject[]) => void;
};

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type ProviderProps = {
  children: ReactNode;
};

export const AppContext = React.createContext<ContextProps>({
  selectedCategory: "",
  setSelectedCategory: () => "",
  name: "",
  setName: () => "",
  userID: "",
  setUserID: () => "",
  difficulty: "",
  setDifficulty: () => "",
  userAnswers: [],
  setUserAnswers: () => [],
});

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [userID, setUserID] = useState("");
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        name,
        setName,
        userID,
        setUserID,
        difficulty,
        setDifficulty,
        userAnswers,
        setUserAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
