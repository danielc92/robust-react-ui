// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IColumnProps } from './Column.types';

import './Column.scss';

const Column = ({
  children,
  size = 'quarter',
  paddingX = 's',
  paddingY = 's',
}: IColumnProps) => (
  <div
    data-testid="Column"
    className={getClassNames({
      'rrui-column': true,
      [`rrui-column--one-${size}`]: true,
      [`rrui-column--padding-x-${paddingX}`]: true,
      [`rrui-column--padding-y-${paddingY}`]: true,
    })}
  >
    {children}
  </div>
);
export default Column;
