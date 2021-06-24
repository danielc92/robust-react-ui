// Generated with util/create-component.js
import React from 'react';

import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IFormSubmitProps } from './Submit.types';

import './Submit.scss';

const Submit = ({
  value,
  id,
  size = 'medium',
  variant = 'primary',
}: IFormSubmitProps) => (
  <input
    type="submit"
    value={value}
    id={id || null}
    data-testid="Button"
    className={getClassNames({
      'rrui-form__submit': true,
      [`rrui-form__submit--${variant}`]: true,
      [`rrui-form__submit--${size}`]: true,
    })}
  />
);

export default Submit;
