// Generated with util/create-component.js
import React from "react";
import {
  HeadingLevel,
  HeadingProps,
  ParagraphProps,
  TypographyProps,
} from "./Typography.types";
import "./Typography.scss";
import classNames from "classnames";

const Typography = ({ children }: TypographyProps) => (
  <React.Fragment>{children}</React.Fragment>
);

const getHeaderClass = (level: HeadingLevel | null, jumbo: boolean) => {
  const levelCalc = !level ? 1 : level;
  return classNames({
    "dcui-header": true,
    [`dcui-header__${levelCalc}`]: true,
    [`dcui-header__${levelCalc}--jumbo`]: jumbo,
  });
};

const Heading = ({ children, level, jumbo, id }: HeadingProps) => {
  if (!level || level === 1)
    return (
      <h1
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2
        data-testid="Heading"
        className={getHeaderClass(level, jumbo)}
        id={id || null}
      >
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h5>
    );
  if (level === 6)
    return (
      <h6
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h6>
    );
};

const Paragraph = ({ children, id, size }: ParagraphProps) => (
  <p
    className={classNames({
      "dcui-para": true,
      "dcui-para--small": size === "small",
      "dcui-para--medium": size === "medium" || !size,
      "dcui-para--large": size === "large",
    })}
    id={id || null}
    data-testid="Paragraph"
  >
    {children}
  </p>
);

Typography.Paragraph = Paragraph;

Typography.Heading = Heading;

export default Typography;
