// Generated with util/create-component.js
import React from 'react';

import getClassNames from 'robust-react-ui/utils/getClassNames';
import GridItem from 'robust-react-ui/components/Layout/GridItem';
import { IGridProps } from './Grid.types';
import './Grid.scss';

const Grid = ({ children, gap = 's', type = 'fixed' }: IGridProps) => (
  <div
    data-testid="Grid"
    className={getClassNames({
      'rrui-grid': true,
      [`rrui-grid--${type}`]: true,
      'rrui-grid--gap-xxs': gap === 'xxs',
      'rrui-grid--gap-xs': gap === 'xs',
      'rrui-grid--gap-s': gap === 's',
      'rrui-grid--gap-m': gap === 'm',
      'rrui-grid--gap-l': gap === 'l',
    })}
  >
    {children}
  </div>
);

Grid.GridItem = GridItem;

export default Grid;
