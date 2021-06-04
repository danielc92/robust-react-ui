// Generated with util/create-component.js
import React from "react";
import { ParagraphProps } from "./Paragraph.types";
import "./Paragraph.scss";
import classNames from "classnames";

const Paragraph = ({ children, id, size, bolded }: ParagraphProps) => (
  <p
    className={classNames({
      "dcui-para": true,
      "dcui-para--small": size === "small",
      "dcui-para--medium": size === "medium" || !size,
      "dcui-para--large": size === "large",
      "dcui-para--bolded": bolded,
    })}
    id={id || null}
    data-testid="Paragraph"
  >
    {children}
  </p>
);

export default Paragraph;
