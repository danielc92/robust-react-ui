// Generated with util/create-component.js
import React from 'react';
import { IComplementaryProps } from './Complementary.types';

const Complementary = ({ children, ariaLabelledBy }: IComplementaryProps) => (
  <aside
    data-testid="Complementary"
    className="dcui-landmark__complementary"
    aria-labelledby={ariaLabelledBy || ''}
  >
    {children}
  </aside>
);

export default Complementary;
