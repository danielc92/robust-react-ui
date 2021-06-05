// Generated with util/create-component.js
import React from "react";
import classNames from "classnames";
import { ColumnProps } from "./Column.types";

import "./Column.scss";

const Column = ({ children, size }: ColumnProps) => (
  <div
    data-testid="Column"
    className={classNames({
      "dcui-column": true,
      "dcui-column--one-third": size === "third",
      "dcui-column--one-half": size === "half",
      "dcui-column--one-quarter": size === "quarter",
    })}
  >
    {children}
  </div>
);
export default Column;
