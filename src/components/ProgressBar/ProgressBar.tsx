// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IProgressBarProps } from './ProgressBar.types';
import './ProgressBar.scss';

const ProgressBar = ({
  minimumValue = 0,
  maximumValue = 100,
  currentValue,
  size = 'medium',
  variant = 'primary',
  fullWidth,
  ariaLabel = 'Progress bar',
}: IProgressBarProps) => {
  const percentage =
    ((currentValue - minimumValue) / (maximumValue - minimumValue)) * 100;
  return (
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
        aria-label={ariaLabel}
        data-testid="ProgressBarInner"
        className="rrui-progress__inner"
        role="progressbar"
        aria-valuenow={currentValue}
        aria-valuemin={minimumValue}
        aria-valuemax={maximumValue}
        style={{ width: `${percentage.toString()}%` }}
      >
        {/* <span className="sr-only">{currentValue.toString() + "% Complete"}</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;
