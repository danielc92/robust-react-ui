// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IGridItemProps } from './GridItem.types';
import './GridItem.scss';

const GridItem = ({
  children,
  config,
  variant = 'primary',
  paddingX = 's',
  paddingY = 's',
}: IGridItemProps) => {
  const style: React.CSSProperties = config
    ? {
        gridRowStart: config.rowStart,
        gridRowEnd: config.rowStart + config.height,
        gridColumnStart: config.colStart,
        gridColumnEnd: config.colStart + config.width,
      }
    : {};

  // shrink when col exceeds tablet width (4 fr)
  const shrinkOnTablet = config && config.width > 4;

  // shrink when col exceeds mobil width (2 fr)
  const shrinkOnMobile = config && config.width > 1;
  return (
    <div
      data-testid="GridItem"
      className={getClassNames({
        'rrui-grid__item': true,
        [`rrui-grid__item--${variant}`]: true,
        [`rrui-grid__item--padding-x-${paddingX}`]: true,
        [`rrui-grid__item--padding-y-${paddingY}`]: true,
        'rrui-grid__item--shrink-tablet': shrinkOnTablet,
        'rrui-grid__item--shrink-mobile': shrinkOnMobile && !shrinkOnTablet,
      })}
      style={style}
    >
      {children}
    </div>
  );
};

export default GridItem;
