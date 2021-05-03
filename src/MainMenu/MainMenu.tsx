import React from "react";

//components
import Heading from "../components/Heading";
import ActionButton from "../components/ActionButton";
//router
import { useHistory } from "react-router-dom";

//styles
import { SharedLayout } from "../shared_styles";

const MainMenu: React.FC = (props) => {
  const history = useHistory();

  const handleStart = () => {
    history.push(`${1}/quiz`);
  };

  return (
    <SharedLayout>
      <Heading text={"How much do you know?"} />

      <ActionButton text={"Start"} callback={handleStart} />
    </SharedLayout>
  );
};

export default MainMenu;
