import React from "react";

// Generated with util/create-component.js
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "danger" | "success" | "secondary";
  children: React.ReactNode;
  id?: string;
  tabIndex?: number;
  ariaControls?: string;
  onClickFunction?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onKeyDownFunction?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
