// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";
import classNames from "classnames";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, id, ariaControls, size, variant, tabIndex, onClickFunction },
    ref
  ) => (
    <button
      tabIndex={tabIndex ? tabIndex : null}
      aria-controls={ariaControls ? ariaControls : null}
      id={id ? id : null}
      data-testid="Button"
      onClick={(e) => {
        onClickFunction ? onClickFunction(e) : {};
      }}
      ref={ref}
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
  )
);

Button.displayName = "Button";

export default Button;
