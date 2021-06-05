// Generated with util/create-component.js
import React from "react";
import { FormLegendProps } from "./Legend.types";
import "./Legend.scss";

const Legend = ({ id, children }: FormLegendProps) => (
  <legend className="dcui-form__legend" id={id}>
    {children}
  </legend>
);
export default Legend;
