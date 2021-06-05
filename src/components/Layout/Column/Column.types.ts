import { ReactNode } from "react";

export interface ColumnProps {
  children: ReactNode;
  size?: "third" | "half" | "quarter";
}
