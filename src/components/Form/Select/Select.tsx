// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'utils/getClassNames';
import { FormSelectProps } from './Select.types';
import './Select.scss';

const Select = ({
  id,
  onBlurFunction,
  onChangeFunction,
  selectedValue,
  values,
  multiple,
  disabled,
}: FormSelectProps) => (
  <select
    data-testid="Select"
    value={selectedValue}
    id={id}
    multiple={multiple || null}
    className={getClassNames({
      'dcui-form__select': true,
      'dcui-form__select--disabled': disabled,
      'dcui-form__select--o': disabled, // override class
    })}
    disabled={disabled}
    onChange={onChangeFunction}
    onBlur={onBlurFunction || (() => {})}
  >
    {values.map((v) => (
      <option data-testid="SelectOption" key={v.keyValue} value={v.keyValue}>
        {v.displayValue}
      </option>
    ))}
  </select>
);
export default Select;
