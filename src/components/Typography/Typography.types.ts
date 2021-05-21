import { ReactNode } from "react";

// Generated with util/create-component.js
export interface TypographyProps {
  children: ReactNode;
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface HeadingProps {
  children: ReactNode;
  id?: string;
  level?: HeadingLevel;
  jumbo?: boolean;
}

export interface ParagraphProps {
  children: ReactNode;
  id?: string;
  bolded?: boolean;
  size?: "small" | "medium" | "large";
}
