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
  tagName = 'div',
  id,
  ariaLabel,
  ariaLabelledBy,
}: IColumnProps) =>
  React.createElement(
    tagName,
    {
      'data-testid': 'Column',
      className: getClassNames({
        'rrui-column': true,
        [`rrui-column--one-${size}`]: true,
        [`rrui-column--padding-x-${paddingX}`]: true,
        [`rrui-column--padding-y-${paddingY}`]: true,
      }),
      id,
      'aria-labelledby': ariaLabelledBy,
      'aria-label': ariaLabel,
    },
    children
  );

export default Column;
