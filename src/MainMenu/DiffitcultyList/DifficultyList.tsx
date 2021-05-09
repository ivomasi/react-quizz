import React, { useContext } from "react";

//styles
import { DiffWrapper } from "./DifficultyList.styles";

//components
import ChoosingButton from "../../components/ChoosingButton";

//context
import { AppContext } from "../../AppContext";

const DifficultyList: React.FC = () => {
  const ctx = useContext(AppContext);

  const handleSelect = (e: any) => {
    const difficulty = e.currentTarget.value;

    ctx.setDifficulty(difficulty);
  };
  return (
    <div>
      <h2>Difficulty</h2>
      <DiffWrapper>
        <ChoosingButton
          value="easy"
          currentlySelected={ctx.difficulty}
          callback={handleSelect}
        />
        <ChoosingButton
          value="medium"
          currentlySelected={ctx.difficulty}
          callback={handleSelect}
        />
        <ChoosingButton
          value="hard"
          currentlySelected={ctx.difficulty}
          callback={handleSelect}
        />
      </DiffWrapper>
    </div>
  );
};

export default DifficultyList;
