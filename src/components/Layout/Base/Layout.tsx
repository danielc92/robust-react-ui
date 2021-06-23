// Generated with util/create-component.js
import React from 'react';
import Column from 'robust-react-ui/components/Layout/Column';
import Grid from 'robust-react-ui/components/Layout/Grid';
import Container from 'robust-react-ui/components/Layout/Container';
import Row from 'robust-react-ui/components/Layout/Row';
import { ILayoutProps } from './Layout.types';

const Layout = ({ children }: ILayoutProps) => (
  <div data-testid="Layout">{children}</div>
);

Layout.Row = Row;
Layout.Column = Column;
Layout.Container = Container;
Layout.Grid = Grid;

export default Layout;
