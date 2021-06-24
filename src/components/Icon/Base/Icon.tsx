import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import './Icon.scss';
import { IIconProps } from './Icon.types';

const Icon = ({
  children,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  variant = 'primary',
}: IIconProps) => (
  <svg
    data-testid="Icon"
    width={width}
    height={height}
    viewBox={viewBox}
    className={getClassNames({
      'rrui-icon': true,
      [`rrui-icon--${variant}`]: true,
    })}
  >
    {children}
  </svg>
);

export default Icon;
