// Generated with util/create-component.js
import React from 'react';
import { LayoutProps } from './Layout.types';
import Row from '../Row';
import Column from '../Column';
import Container from '../Container';

const Layout = ({ children }: LayoutProps) => (
  <div data-testid="Layout">{children}</div>
);

Layout.Row = Row;
Layout.Column = Column;
Layout.Container = Container;

export default Layout;
