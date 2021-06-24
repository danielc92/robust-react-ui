// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IFormInputProps } from './Input.types';
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
}: IFormInputProps) => (
  <div className="rrui-form__input-wrapper" data-testid="InputWrapper">
    <input
      name={name}
      data-testid="Input"
      disabled={disabled}
      className={getClassNames({
        'rrui-form__input': true,
        'rrui-form__input--full-width': fullWidth,
        'rrui-form__input--has-error': error,
        'rrui-form__input--disabled': disabled,
        'rrui-form__input--o': disabled,
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
        'rrui-form__input-error': true,
        'rrui-form__input-error--hidden': !error,
      })}
    >
      {errorMessage}
    </p>
  </div>
);

export default Input;
