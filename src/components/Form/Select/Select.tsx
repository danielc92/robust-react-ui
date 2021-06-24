// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IFormSelectProps } from './Select.types';
import './Select.scss';

const Select = ({
  id,
  onBlurFunction,
  onChangeFunction,
  selectedValue,
  values,
  multiple,
  disabled,
}: IFormSelectProps) => (
  <select
    data-testid="Select"
    value={selectedValue}
    id={id}
    multiple={multiple || null}
    className={getClassNames({
      'rrui-form__select': true,
      'rrui-form__select--disabled': disabled,
      'rrui-form__select--o': disabled, // override class
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
