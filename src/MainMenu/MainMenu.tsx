import React from "react";

//components
import Heading from "../components/Heading";
import ActionButton from "../components/ActionButton";
//router
import { useHistory } from "react-router-dom";

const MainMenu: React.FC = (props) => {
  const history = useHistory();

  const handleStart = () => {
    history.push(`${1}/quiz`);
  };

  return (
    <div>
      <Heading text={"How much do you know?"} />

      <ActionButton text={"Start"} callback={handleStart} />
    </div>
  );
};

export default MainMenu;
