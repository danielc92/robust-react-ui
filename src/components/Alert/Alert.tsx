// Generated with util/create-component.js
import React from "react";

import { AlertProps } from "./Alert.types";

import "./Alert.scss";
import classNames from "classnames";

const Alert = ({ children, variant, fullWidth }: AlertProps) => {
  return (
    <div
      data-testid="Alert"
      role="alert"
      className={classNames({
        "dcui-alert": true,
        "dcui-alert--primary": variant === "primary" || !variant,
        "dcui-alert--danger": variant === "danger",
        "dcui-alert--success": variant === "success",
        "dcui-alert--full-width": fullWidth,
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
