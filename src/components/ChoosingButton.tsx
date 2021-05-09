import React from "react";

//styles
import { ChoosingButtonStyled } from "./ChoosingButton.styles";

type ChoosingButtonProps = {
  value: string;
  currentlySelected: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ChoosingButton: React.FC<ChoosingButtonProps> = ({
  value,
  currentlySelected,
  callback,
}) => {
  return (
    <ChoosingButtonStyled
      value={value}
      currentlySelected={currentlySelected}
      onClick={callback}
    >
      {value}
    </ChoosingButtonStyled>
  );
};

export default ChoosingButton;
