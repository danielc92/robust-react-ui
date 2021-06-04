import React from "react";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import { TypographyProps } from "./Typography.types";

const Typography = ({ children }: TypographyProps) => (
  <React.Fragment>{children}</React.Fragment>
);

Typography.Heading = Heading;
Typography.Paragraph = Paragraph;
export default Typography;
