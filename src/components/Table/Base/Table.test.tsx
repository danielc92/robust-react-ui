// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';
import { TableProps } from './Table.types';

describe('Table suite', () => {
  const renderComponent = (partialProps?: Partial<TableProps>) =>
    render(
      <Table {...partialProps}>
        <Table.Head>
          <Table.Row>
            <Table.Header>Animals</Table.Header>
            <Table.Header>Sources</Table.Header>
            <Table.Header>Planets</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

  it('should render correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Table');

    expect(component).toHaveClass('dcui-table');
  });
  it('should render with striped modifier class', () => {
    const { getByTestId } = renderComponent({ striped: true });

    const component = getByTestId('Table');

    expect(component).toHaveClass('dcui-table--striped');
  });
});
