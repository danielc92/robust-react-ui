import { ReactNode } from 'react';

export interface TableHeaderProps {
  children: ReactNode;
  scope?: 'col' | 'row';
  colSpan?: number;
  rowSpan?: number;
}
