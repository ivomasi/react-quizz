import React from "react";

//styles
import { DiffWrapper } from "./DifficultyList.styles";

//components
import ChoosingButton from "../../components/ChoosingButton";

type DifficultyProps = {
  handleDifficultySelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
  difficulty: string;
};

const DifficultyList: React.FC<DifficultyProps> = ({
  handleDifficultySelect,
  difficulty,
  children,
}) => {
  return (
    <div>
      <h2>Choose Difficulty</h2>
      <DiffWrapper>
        <ChoosingButton
          value="easy"
          currentlySelected={difficulty}
          callback={handleDifficultySelect}
        />
        <ChoosingButton
          value="medium"
          currentlySelected={difficulty}
          callback={handleDifficultySelect}
        />
        <ChoosingButton
          value="hard"
          currentlySelected={difficulty}
          callback={handleDifficultySelect}
        />
      </DiffWrapper>
    </div>
  );
};

export default DifficultyList;
