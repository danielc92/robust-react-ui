// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IProgressBarProps } from './ProgressBar.types';
import './ProgressBar.scss';

const ProgressBar = ({
  minimumValue,
  maximumValue,
  currentValue,
  size,
  fullWidth,
  variant,
}: IProgressBarProps) => (
  <div
    className={getClassNames({
      'dcui-progress': true,
      'dcui-progress--full-width': fullWidth,
      'dcui-progress--small': size === 'small',
      'dcui-progress--medium': size === 'medium' || !size,
      'dcui-progress--large': size === 'large',
      'dcui-progress--primary': !variant || variant === 'primary',
      'dcui-progress--danger': variant === 'danger',
      'dcui-progress--secondary': variant === 'secondary',
      'dcui-progress--success': variant === 'success',
    })}
    data-testid="ProgressBar"
  >
    <div
      data-testid="ProgressBarInner"
      className="dcui-progress__inner"
      role="progressbar"
      aria-valuenow={currentValue || 0}
      aria-valuemin={minimumValue || 0}
      aria-valuemax={maximumValue || 100}
      style={{ width: `${currentValue.toString()}%` }}
    >
      {/* <span className="sr-only">{currentValue.toString() + "% Complete"}</span> */}
    </div>
  </div>
);

export default ProgressBar;
