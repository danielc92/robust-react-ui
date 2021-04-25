// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";
import classNames from "classnames";

const Button = ({ size, children, variant }: ButtonProps) => {
  return (
    <button
      data-testid="Button"
      className={classNames({
        "dcui-button": true,
        "dcui-button--small": size === "small",
        "dcui-button--medium": !size || size === "medium",
        "dcui-button--large": size === "large",
        "dcui-button--primary": variant === "primary" || !variant,
        "dcui-button--danger": variant === "danger",
        "dcui-button--success": variant === "success",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
