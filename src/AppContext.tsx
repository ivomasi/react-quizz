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
});

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [userID, setUserID] = useState("");

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
