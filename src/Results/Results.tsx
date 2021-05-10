import React, { useContext } from "react";

import { AppContext } from "../AppContext";

//styles
import { SharedLayout } from "../shared_styles";

const Results = () => {
  const ctx = useContext(AppContext);

  console.log(ctx.userAnswers);

  return <SharedLayout>Results page</SharedLayout>;
};

export default Results;
