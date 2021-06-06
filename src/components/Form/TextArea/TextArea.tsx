// Generated with util/create-component.js
import React from 'react';

import { FormTextAreaProps } from './TextArea.types';

import './TextArea.scss';
import getClassNames from 'utils/getClassNames';

const TextArea = ({
  id,
  value,
  rows,
  placeholder,
  onChangeFunction,
  onBlurFunction,
  fullWidth,
  error,
  errorMessage,
  disabled,
}: FormTextAreaProps) => (
  <div className="dcui-form__textarea-wrapper" data-testid="TextAreaWrapper">
    <textarea
      data-testid="TextArea"
      disabled={disabled}
      className={getClassNames({
        'dcui-form__textarea': true,
        'dcui-form__textarea--full-width': fullWidth,
        'dcui-form__textarea--has-error': error,
        'dcui-form__textarea--disabled': disabled,
        'dcui-form__textarea--o': disabled, // override class
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
        'dcui-form__textarea-error': true,
        'dcui-form__textarea-error--hidden': !error,
      })}
    >
      {errorMessage}
    </p>
  </div>
);

export default TextArea;
