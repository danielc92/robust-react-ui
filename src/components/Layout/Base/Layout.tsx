// Generated with util/create-component.js
import React from 'react';
import Column from 'robust-react-ui/components/Layout/Column';
import Container from 'robust-react-ui/components/Layout/Container';
import Row from 'robust-react-ui/components/Layout/Row';
import { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps) => (
  <div data-testid="Layout">{children}</div>
);

Layout.Row = Row;
Layout.Column = Column;
Layout.Container = Container;

export default Layout;
