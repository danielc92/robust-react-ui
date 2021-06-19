import { ReactNode } from 'react';

export interface ITableHeaderProps {
  children: ReactNode;
  scope?: 'col' | 'row';
  colSpan?: number;
  rowSpan?: number;
}
