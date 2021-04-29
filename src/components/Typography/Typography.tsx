// Generated with util/create-component.js
import React, { ReactNode } from "react";

import { TypographyProps } from "./Typography.types";

import "./Typography.scss";

const Typography = ({ children }: TypographyProps) => (
  <React.Fragment>{children}</React.Fragment>
);

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  jumbo?: boolean;
}

const Heading = ({ children, level }: HeadingProps) => {
  if (level === 2) return <h2 className="dcuid-header__2">{children}</h2>;
  if (level === 3) return <h3 className="dcuid-header__3">{children}</h3>;
  if (level === 4) return <h4 className="dcuid-header__4">{children}</h4>;
  if (level === 5) return <h5 className="dcuid-header__5">{children}</h5>;
  if (level === 6) return <h6 className="dcuid-header__6">{children}</h6>;

  return <h1 className="dcuid-header__1">{children}</h1>;
};

Typography.Heading = Heading;

export default Typography;
