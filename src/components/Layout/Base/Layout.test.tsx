// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import Column from 'robust-react-ui/components/Layout/Column';
import Row from 'robust-react-ui/components/Layout/Row';
import Container from 'robust-react-ui/components/Layout/Container';

describe('Layout Suite', () => {
  beforeEach(() => {});

  const renderRow = () =>
    render(
      <Row>
        <Column>content 1</Column>
        <Column>content 2</Column>
        <Column>content 3</Column>
      </Row>
    );

  const renderContainer = () => render(<Container>some content</Container>);

  it('Row should render correct class', () => {
    const { getByTestId } = renderRow();

    const component = getByTestId('Row');

    expect(component).toHaveClass('rrui-row');
  });
  it('Container should render correct class', () => {
    const { getByTestId } = renderContainer();

    const component = getByTestId('Container');

    expect(component).toHaveClass('rrui-container');
  });
});
