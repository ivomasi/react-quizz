import React from "react";

import { HeadingStyle } from "./Heading.styles";

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <HeadingStyle dangerouslySetInnerHTML={{ __html: text }}></HeadingStyle>
  );
};

export default Heading;
