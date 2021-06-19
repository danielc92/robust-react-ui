import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import './Icon.scss';
import Box from 'robust-react-ui/components/Icon/Box';
import AlertTriangle from 'robust-react-ui/components/Icon/AlertTriangle';
import ArrowDown from 'robust-react-ui/components/Icon/ArrowDown';
import Camera from 'robust-react-ui/components/Icon/Camera';
import Code from 'robust-react-ui/components/Icon/Code';
import Eye from 'robust-react-ui/components/Icon/Eye';
import Picture from 'robust-react-ui/components/Icon/Picture';
import Download from 'robust-react-ui/components/Icon/Download';
import Home from 'robust-react-ui/components/Icon/Home';
import EyeOff from 'robust-react-ui/components/Icon/EyeOff';
import { IIconProps } from './Icon.types';

const Icon = ({
  children,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  variant = 'primary',
}: IIconProps) => {
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
