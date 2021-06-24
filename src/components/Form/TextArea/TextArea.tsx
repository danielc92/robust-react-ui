// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';

import { IFormTextAreaProps } from './TextArea.types';

import './TextArea.scss';

const TextArea = ({
  id,
  value,
  name,
  rows,
  placeholder,
  onChangeFunction,
  onBlurFunction,
  fullWidth,
  error,
  errorMessage,
  disabled,
}: IFormTextAreaProps) => (
  <div className="rrui-form__textarea-wrapper" data-testid="TextAreaWrapper">
    <textarea
      name={name}
      data-testid="TextArea"
      disabled={disabled}
      className={getClassNames({
        'rrui-form__textarea': true,
        'rrui-form__textarea--full-width': fullWidth,
        'rrui-form__textarea--has-error': error,
        'rrui-form__textarea--disabled': disabled,
        'rrui-form__textarea--o': disabled, // override class
      })}
      rows={rows || 8}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChangeFunction}
      onBlur={onBlurFunction || (() => {})}
    />
    <p
      className={getClassNames({
        'rrui-form__textarea-error': true,
        'rrui-form__textarea-error--hidden': !error,
      })}
    >
      {errorMessage}
    </p>
  </div>
);

export default TextArea;
