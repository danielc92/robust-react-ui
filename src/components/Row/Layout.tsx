// Generated with util/create-component.js
import React, { ReactNode } from "react";
import classNames from "classnames";
import { LayoutProps } from "./Layout.types";

import "./Layout.scss";

const Layout = ({ children }: LayoutProps) => (
  <div data-testid="Layout">{children}</div>
);

interface RowProps {
  children: ReactNode;
  wrap?: boolean;
}

const Row = ({ children, wrap }: LayoutProps) => (
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

interface ColumnProps {
  children: ReactNode;
}

const Column = ({ children }: ColumnProps) => (
  <div
    data-testid="Column"
    className={classNames({
      "dcui-column": true,
    })}
  >
    {children}
  </div>
);

Layout.Row = Row;
Layout.Column = Column;

export default Layout;
