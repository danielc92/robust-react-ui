// Generated with util/create-component.js
import React, { ReactNode } from "react";
import { TypographyProps } from "./Typography.types";
import "./Typography.scss";
import classNames from "classnames";

const Typography = ({ children }: TypographyProps) => (
  <React.Fragment>{children}</React.Fragment>
);

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
interface HeadingProps {
  children: ReactNode;
  id?: string;
  level?: HeadingLevel;
  jumbo?: boolean;
}

const getHeaderClass = (level: HeadingLevel, jumbo: boolean) => {
  return classNames({
    "dcui-header": true,
    [`dcui-header__${level}`]: true,
    [`dcui-header__${level}--jumbo`]: jumbo,
  });
};

const Heading = ({ children, level, jumbo, id }: HeadingProps) => {
  if (level === 2)
    return (
      <h2 className={getHeaderClass(level, jumbo)} id={id ? id : null}>
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3 id={id ? id : null} className={getHeaderClass(level, jumbo)}>
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4 id={id ? id : null} className={getHeaderClass(level, jumbo)}>
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5 id={id ? id : null} className={getHeaderClass(level, jumbo)}>
        {children}
      </h5>
    );
  if (level === 6)
    return (
      <h6 id={id ? id : null} className={getHeaderClass(level, jumbo)}>
        {children}
      </h6>
    );

  return (
    <h1 id={id ? id : null} className={getHeaderClass(level, jumbo)}>
      {children}
    </h1>
  );
};

interface ParagraphProps {
  children: ReactNode;
  id?: string;
  size?: "small" | "medium" | "large";
}

const Paragraph = ({ children, id, size }: ParagraphProps) => (
  <p
    className={classNames({
      "dcui-para": true,
      "dcui-para--small": size === "small",
      "dcui-para--medium": size === "medium" || !size,
      "dcui-para--large": size === "large",
    })}
    id={id ? id : null}
  >
    {children}
  </p>
);

Typography.Paragraph = Paragraph;

Typography.Heading = Heading;

export default Typography;
