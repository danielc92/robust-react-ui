// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";
import getClassNames from "utils/getClassNames";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      id,
      ariaControls,
      size,
      variant,
      tabIndex,
      onClickFunction,
      onKeyDownFunction,
    },
    ref
  ) => (
    <button
      onKeyDown={onKeyDownFunction || null}
      tabIndex={tabIndex || null}
      aria-controls={ariaControls || null}
      id={id || null}
      data-testid="Button"
      onClick={(e) => {
        onClickFunction ? onClickFunction(e) : {};
      }}
      ref={ref}
      className={getClassNames({
        "dcui-button": true,
        "dcui-button--small": size === "small",
        "dcui-button--medium": !size || size === "medium",
        "dcui-button--large": size === "large",
        "dcui-button--primary": variant === "primary" || !variant,
        "dcui-button--danger": variant === "danger",
        "dcui-button--success": variant === "success",
        "dcui-button--secondary": variant === "secondary",
      })}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
