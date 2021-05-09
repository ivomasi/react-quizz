import React from "react";

type DifficultyProps = {
  handleDifficultySelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
  difficulty: string;
};

const DifficultyList: React.FC<DifficultyProps> = ({
  handleDifficultySelect,
  difficulty,
}) => {
  return (
    <div>
      <button
        value="easy"
        style={{ backgroundColor: difficulty === "easy" ? "red" : "white" }}
        onClick={handleDifficultySelect}
      >
        easy
      </button>
      <button
        value="medium"
        style={{ backgroundColor: difficulty === "medium" ? "red" : "white" }}
        onClick={handleDifficultySelect}
      >
        medium
      </button>
      <button
        value="hard"
        style={{ backgroundColor: difficulty === "hard" ? "red" : "white" }}
        onClick={handleDifficultySelect}
      >
        hard
      </button>
    </div>
  );
};

export default DifficultyList;
