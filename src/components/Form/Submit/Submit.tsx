// Generated with util/create-component.js
import React from 'react';

import getClassNames from 'utils/getClassNames';
import { FormSubmitProps } from './Submit.types';

import './Submit.scss';

const Submit = ({ value, id, size, variant }: FormSubmitProps) => (
  <input
    type="submit"
    value={value}
    id={id || null}
    data-testid="Button"
    className={getClassNames({
      'dcui-form__submit': true,
      'dcui-form__submit--small': size === 'small',
      'dcui-form__submit--medium': !size || size === 'medium',
      'dcui-form__submit--large': size === 'large',
      'dcui-form__submit--primary': variant === 'primary' || !variant,
      'dcui-form__submit--danger': variant === 'danger',
      'dcui-form__submit--success': variant === 'success',
    })}
  />
);

export default Submit;
