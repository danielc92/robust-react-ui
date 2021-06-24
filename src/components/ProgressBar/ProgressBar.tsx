// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IProgressBarProps } from './ProgressBar.types';
import './ProgressBar.scss';

const ProgressBar = ({
  minimumValue,
  maximumValue,
  currentValue,
  size = 'medium',
  variant = 'primary',
  fullWidth,
}: IProgressBarProps) => (
  <div
    className={getClassNames({
      'rrui-progress': true,
      'rrui-progress--full-width': fullWidth,
      [`rrui-progress--${variant}`]: true,
      [`rrui-progress--${size}`]: true,
    })}
    data-testid="ProgressBar"
  >
    <div
      data-testid="ProgressBarInner"
      className="rrui-progress__inner"
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
