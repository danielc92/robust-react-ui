import { ReactNode } from "react";

// Generated with util/create-component.js
export interface TableProps {
  children: ReactNode;
  striped?: boolean;
  centerCellContent?: boolean;
  id?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export interface TableHeadProps {
  children: ReactNode;
}
export interface TableRowProps {
  children: ReactNode;
}

export interface TableCellProps {
  children: ReactNode;
}
export interface TableHeaderProps {
  children: ReactNode;
  scope?: "col" | "row";
  colSpan?: number;
  rowSpan?: number;
}

export interface TableHeadProps {
  children: ReactNode;
}

export interface TableBodyProps {
  children: ReactNode;
}

export interface TableFootProps {
  children: ReactNode;
}
