import React from "react";

//router
import { useHistory } from "react-router-dom";

//components
import Heading from "../components/Heading";
import ActionButton from "../components/ActionButton";

//styles
import { Wrapper } from "./Error.styles";

const Error = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <Heading text={"Sorry you are in wrong place"} />
      <ActionButton text={"Back to home"} callback={handleGoHome} />
    </Wrapper>
  );
};

export default Error;
