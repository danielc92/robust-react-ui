// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import Column from './Column';
import Row from '../Row';
import { IColumnProps } from './Column.types';

describe('Row/Column suite', () => {
  let props: Partial<IColumnProps>;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <Row>
        <Column {...props}>
          <p>Adipisicing do elit esse in duis exercitation cupidatat.</p>
        </Column>
        <Column {...props}>
          <p>Adipisicing do elit esse in duis exercitation cupidatat.</p>
        </Column>
        <Column {...props}>
          <p>Adipisicing do elit esse in duis exercitation cupidatat.</p>
        </Column>
        <Column {...props}>
          <p>Adipisicing do elit esse in duis exercitation cupidatat.</p>
        </Column>
      </Row>
    );

  it('should render row base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Row');

    expect(component).toHaveClass('rrui-row');
  });

  it('should render row wrap class by default', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Row');

    expect(component).toHaveClass('rrui-row--wrap');
  });
  it('should render exactly 4 columns', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component).toHaveLength(4);
  });
  it('should render exactly 4 columns', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column');
  });
  it('column should have small padding by default', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column--padding-x-s');
    expect(component[0]).toHaveClass('rrui-column--padding-y-s');
  });
  it('column should have large padding modifier class', () => {
    props.paddingX = 'l';
    props.paddingY = 'l';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column--padding-x-l');
    expect(component[0]).toHaveClass('rrui-column--padding-y-l');
  });
  it('column should have medium padding modifier class', () => {
    props.paddingX = 'm';
    props.paddingY = 'm';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column--padding-x-m');
    expect(component[0]).toHaveClass('rrui-column--padding-y-m');
  });
  it('column should have quarter modifier by default', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column--one-quarter');
  });
  it('column should have render with third modifier class', () => {
    props.size = 'third';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column--one-third');
  });
  it('column should have render with half modifier class', () => {
    props.size = 'half';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveClass('rrui-column--one-half');
  });
  it('should render exactly 4 columns', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0]).toHaveTextContent(
      'Adipisicing do elit esse in duis exercitation cupidatat.'
    );
  });

  it('should render with no id by default', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0].getAttribute('id')).toBeFalsy();
  });
  it('should render with aria-label attribute', () => {
    props.ariaLabel = 'ariaLabel';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0].getAttribute('aria-label')).toEqual('ariaLabel');
  });
  it('should render with aria-labelledby attribute', () => {
    props.ariaLabelledBy = 'ariaLabelledBy';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');

    expect(component[0].getAttribute('aria-labelledby')).toEqual(
      'ariaLabelledBy'
    );
  });

  it('should render as a <div> by default', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');
    // node names are in capitals

    expect(component[0].nodeName).toEqual('DIV');
  });
  it('should render as a <main> ', () => {
    props.tagName = 'main';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');
    // node names are in capitals

    expect(component[0].nodeName).toEqual('MAIN');
  });
  it('should render as a <aside> ', () => {
    props.tagName = 'aside';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');
    // node names are in capitals

    expect(component[0].nodeName).toEqual('ASIDE');
  });

  it('should render as a <section> ', () => {
    props.tagName = 'section';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('Column');
    // node names are in capitals
    expect(component[0].nodeName).toEqual('SECTION');
  });
});
