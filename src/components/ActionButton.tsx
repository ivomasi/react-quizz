import React from "react";

//styled
import { Button } from "./ActionButton.styles";

type ActionButtonProps = {
  text: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ text, callback }) => {
  return (
    <Button dangerouslySetInnerHTML={{ __html: text }} onClick={callback} />
  );
};

export default ActionButton;
