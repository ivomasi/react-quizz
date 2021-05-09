import React, { createContext, ReactNode, useState } from "react";

type ContextProps = {
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  setName: (n: string) => void;
  setDifficulty: (d: string) => void;
  name: string;
  difficulty: string;
};

type ProviderProps = {
  children: ReactNode;
};

export const AppContext = React.createContext<ContextProps>({
  selectedCategory: "",
  setSelectedCategory: () => "",
  name: "",
  setName: () => "",
  difficulty: "",
  setDifficulty: () => "",
});

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        name,
        setName,
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
