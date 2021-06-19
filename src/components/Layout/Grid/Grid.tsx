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
      'dcui-grid': true,
      [`dcui-grid--${type}`]: true,
      'dcui-grid--gap-xxs': gap === 'xxs',
      'dcui-grid--gap-xs': gap === 'xs',
      'dcui-grid--gap-s': gap === 's',
      'dcui-grid--gap-m': gap === 'm',
      'dcui-grid--gap-l': gap === 'l',
    })}
  >
    {children}
  </div>
);

Grid.GridItem = GridItem;

export default Grid;
