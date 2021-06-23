// Generated with util/create-component.js
import React from 'react';

import { IFormCheckboxGroupProps } from './CheckboxGroup.types';

import './CheckboxGroup.scss';

const CheckboxGroup = ({
  id,
  values,
  ariaLabelledBy,
  onSelectFunction,
}: IFormCheckboxGroupProps) => (
  <div role="group" aria-labelledby={ariaLabelledBy} id={id || null}>
    <ul className="dcui-form__checkbox-group" data-testid="CheckboxGroup">
      {values.map((v) => (
        <li key={`checkbox-item-${v.displayValue}`}>
          <div
            onKeyDown={(event) => {
              if (event.keyCode === 32) {
                event.preventDefault();
                event.stopPropagation();
                onSelectFunction(v.keyValue, !v.checked);
              }
            }}
            onClick={() => onSelectFunction(v.keyValue, !v.checked)}
            className="dcui-form__checkbox"
            data-testid="Checkbox"
            role="checkbox"
            aria-checked={v.checked ? 'true' : 'false'}
            tabIndex={0}
          >
            {v.displayValue}
          </div>
        </li>
      ))}
    </ul>
  </div>
);
export default CheckboxGroup;
