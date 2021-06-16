// Generated with util/create-component.js
import React from 'react';
import { TableHeaderProps } from './Header.types';

const Header = ({ children, colSpan, rowSpan, scope }: TableHeaderProps) => (
  <th
    className="dcui-table__header"
    scope={scope || 'col'}
    rowSpan={rowSpan || null}
    colSpan={colSpan || null}
  >
    {children}
  </th>
);

export default Header;
