// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IColumnProps } from './Column.types';

import './Column.scss';

const Column = ({ children, size }: IColumnProps) => (
  <div
    data-testid="Column"
    className={getClassNames({
      'dcui-column': true,
      'dcui-column--one-third': size === 'third',
      'dcui-column--one-half': size === 'half',
      'dcui-column--one-quarter': size === 'quarter' || !size,
    })}
  >
    {children}
  </div>
);
export default Column;
