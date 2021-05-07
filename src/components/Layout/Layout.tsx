// Generated with util/create-component.js
import React, { ReactNode } from "react";
import classNames from "classnames";
import {
  LayoutProps,
  ColumnProps,
  RowProps,
  ContainerProps,
} from "./Layout.types";

import "./Layout.scss";

const Layout = ({ children }: LayoutProps) => (
  <div data-testid="Layout">{children}</div>
);

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

const Column = ({ children, size }: ColumnProps) => (
  <div
    data-testid="Column"
    className={classNames({
      "dcui-column": true,
      "dcui-column--one-third": size === "third",
      "dcui-column--one-half": size === "half",
      "dcui-column--one-quarter": size === "quarter",
    })}
  >
    {children}
  </div>
);

const Container = ({ children, size }: ContainerProps) => (
  <div
    data-testid="Container"
    className={classNames({
      "dcui-container": true,
      "dcui-container--small": size === "small",
      "dcui-container--medium": size === "medium" || !size,
      "dcui-container--large": size === "large",
    })}
  >
    {children}
  </div>
);

Layout.Row = Row;
Layout.Column = Column;
Layout.Container = Container;

export default Layout;
