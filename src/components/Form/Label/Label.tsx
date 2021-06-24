// Generated with util/create-component.js
import React from 'react';
import { IFormLabelProps } from './Label.types';
import './Label.scss';

const Label = ({ children, id, htmlFor, required }: IFormLabelProps) => (
  <label
    className="rrui-form__label"
    htmlFor={htmlFor || null}
    id={id || null}
    data-testid="Label"
  >
    <span>{children}</span>
    {required && <span className="rrui-form__label-required">*</span>}
  </label>
);

export default Label;
