// Generated with util/create-component.js
import React from "react";
import classNames from "classnames";
import { RowProps } from "./Row.types";

import "./Row.scss";

const Row = ({ children, wrap }: RowProps) => (
  <div
    data-testid="Row"
    className={classNames({
      "dcui-row": true,
      "dcui-row--wrap": wrap === true,
    })}
  >
    {children}
  </div>
);

export default Row;
