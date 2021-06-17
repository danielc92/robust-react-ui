import React from 'react';
import getClassNames from 'utils/getClassNames';
import { IconProps } from './Icon.types';
import './Icon.scss';
import Box from '../Box';
import AlertTriangle from '../AlertTriangle';
import ArrowDown from '../ArrowDown';
import Camera from '../Camera';
import Code from '../Code';
import Eye from '../Eye';
import Picture from '../Picture';
import Download from '../Download';
import Home from '../Home';
import EyeOff from '../EyeOff';

const Icon = ({
  children,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  variant = 'primary',
}: IconProps) => {
  const variantClass = `dcui-icon--${variant}`;
  return (
    <svg
      data-testid="Icon"
      width={width}
      height={height}
      viewBox={viewBox}
      className={getClassNames({
        'dcui-icon': true,
        [variantClass]: true,
      })}
    >
      {children}
    </svg>
  );
};

Icon.AlertTriangle = AlertTriangle;
Icon.ArrowDown = ArrowDown;
Icon.Camera = Camera;
Icon.Code = Code;
Icon.Box = Box;
Icon.Eye = Eye;
Icon.EyeOff = EyeOff;
Icon.Picture = Picture;
Icon.Download = Download;
Icon.Home = Home;

export default Icon;
