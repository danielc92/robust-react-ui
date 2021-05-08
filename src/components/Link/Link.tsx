// Generated with util/create-component.js
import React from "react";

import { LinkProps } from "./Link.types";

import "./Link.scss";
import classNames from "classnames";

const Link = ({
  href,
  children,
  size,
  display,
  ariaDescribedBy,
  ariaLabel,
}: LinkProps) => (
  <a
    href={href}
    aria-label={ariaLabel ? ariaLabel : null}
    aria-describedby={ariaDescribedBy ? ariaDescribedBy : null}
    data-testid="Link"
    className={classNames({
      "dcui-link": true,
      "dcui-link--small": size === "small",
      "dcui-link--medium": size === "medium" || !size,
      "dcui-link--large": size === "large",
      "dcui-link--block": display === "block",
    })}
  >
    {children}
  </a>
);

export default Link;
