import React from "react";

// Generated with util/create-component.js
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "danger" | "success";
  children: React.ReactNode;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
