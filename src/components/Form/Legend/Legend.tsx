// Generated with util/create-component.js
import React from 'react';
import { IFormLegendProps } from './Legend.types';
import './Legend.scss';

const Legend = ({ id, children }: IFormLegendProps) => (
  <legend className="rrui-form__legend" id={id}>
    {children}
  </legend>
);
export default Legend;
