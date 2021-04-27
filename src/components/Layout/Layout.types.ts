import { ReactNode } from "react";

// Generated with util/create-component.js
export interface LayoutProps {
  children: ReactNode;
  wrap?: boolean;
}

export interface RowProps {
  children: ReactNode;
  wrap?: boolean;
}

export interface ColumnProps {
  children: ReactNode;
  size?: "third" | "half" | "quarter";
}

export interface ContainerProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
}
