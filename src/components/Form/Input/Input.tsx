// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'utils/getClassNames';
import { FormInputProps } from './Input.types';
import './Input.scss';

const Input = ({
  value,
  id,
  placeholder,
  onChangeFunction,
  onBlurFunction,
  type = 'text',
  fullWidth,
  error,
  errorMessage,
  disabled,
  name,
}: FormInputProps) => (
  <div className="dcui-form__input-wrapper" data-testid="InputWrapper">
    <input
      name={name}
      data-testid="Input"
      disabled={disabled}
      className={getClassNames({
        'dcui-form__input': true,
        'dcui-form__input--full-width': fullWidth,
        'dcui-form__input--has-error': error,
        'dcui-form__input--disabled': disabled,
        'dcui-form__input--o': disabled,
      })}
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChangeFunction}
      onBlur={onBlurFunction || (() => {})}
    />
    <p
      className={getClassNames({
        'dcui-form__input-error': true,
        'dcui-form__input-error--hidden': !error,
      })}
    >
      {errorMessage}
    </p>
  </div>
);

export default Input;
