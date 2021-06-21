// Generated with util/create-component.js
import React from 'react';

import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IButtonProps } from './Button.types';
import './Button.scss';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      id,
      ariaControls,
      size = 'medium',
      variant = 'primary',
      tabIndex,
      ariaLabel,
      square = false,
      onClickFunction,
      onKeyDownFunction,
    },
    ref
  ) => (
    <button
      type="button"
      onKeyDown={onKeyDownFunction || null}
      tabIndex={tabIndex || null}
      aria-label={ariaLabel || null}
      aria-controls={ariaControls || null}
      id={id || null}
      data-testid="Button"
      onClick={(e) => {
        if (typeof onClickFunction === 'function') onClickFunction(e);
      }}
      ref={ref}
      className={getClassNames({
        'dcui-button': true,
        'dcui-button--square': square,
        [`dcui-button--${size}`]: true,
        [`dcui-button--${variant}`]: true,
      })}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
