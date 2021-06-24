// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IRowProps } from './Row.types';

import './Row.scss';

const Row = ({
  children,
  wrap = true,
  alignX = 'left',
  alignY = 'stretch',
}: IRowProps) => (
  <div
    data-testid="Row"
    className={getClassNames({
      'rrui-row': true,
      'rrui-row--wrap': wrap,
      [`rrui-row--align-x-${alignX}`]: true,
      [`rrui-row--align-y-${alignY}`]: true,
    })}
  >
    {children}
  </div>
);

export default Row;
