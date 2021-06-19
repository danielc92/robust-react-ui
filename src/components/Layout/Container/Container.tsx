// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IContainerProps } from './Container.types';

import './Container.scss';

const Container = ({ children, size }: IContainerProps) => (
  <div
    data-testid="Container"
    className={getClassNames({
      'dcui-container': true,
      'dcui-container--small': size === 'small',
      'dcui-container--medium': size === 'medium' || !size,
      'dcui-container--large': size === 'large',
    })}
  >
    {children}
  </div>
);

export default Container;
