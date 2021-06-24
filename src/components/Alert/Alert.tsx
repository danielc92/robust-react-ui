// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IAlertProps } from './Alert.types';
import './Alert.scss';

const Alert = ({
  children,
  variant = 'primary',
  fullWidth,
  visible,
  onCloseActionFunction,
}: IAlertProps) => (
  <div
    data-testid="Alert"
    role="alert"
    className={getClassNames({
      'rrui-alert': true,
      [`rrui-alert--${variant}`]: true,
      'rrui-alert--full-width': fullWidth,
      'rrui-alert--hidden': visible === false,
    })}
  >
    <button
      type="button"
      className="rrui-alert__button"
      aria-label="close alert"
      onClick={() => {
        if (onCloseActionFunction) onCloseActionFunction(!visible);
      }}
    >
      <svg
        className="rrui-alert__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    {children}
  </div>
);

export default Alert;
