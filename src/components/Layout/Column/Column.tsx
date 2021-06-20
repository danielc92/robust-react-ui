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
      'dcui-column': true,
      [`dcui-column--one-${size}`]: true,
      [`dcui-column--padding-x-${paddingX}`]: true,
      [`dcui-column--padding-y-${paddingY}`]: true,
    })}
  >
    {children}
  </div>
);
export default Column;
