// Generated with util/create-component.js
import React from "react";
import { ComplementaryProps } from "./Complementary.types";

const Complementary = ({ children, ariaLabelledBy }: ComplementaryProps) => (
  <aside
    data-testid="Complementary"
    className="dcui-landmark__complementary"
    aria-labelledby={ariaLabelledBy || ""}
  >
    {children}
  </aside>
);

export default Complementary;
