// Generated with util/create-component.js
import React from 'react';
import { FormLabelProps } from './Label.types';
import './Label.scss';

const Label = ({ children, id, htmlFor, required }: FormLabelProps) => (
  <label
    className="dcui-form__label"
    htmlFor={htmlFor || null}
    id={id || null}
    data-testid="Label"
  >
    <span>{children}</span>
    {required && <span className="dcui-form__label-required">*</span>}
  </label>
);

export default Label;
