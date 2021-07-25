// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import GridItem from './GridItem';
import { IGridItemProps } from './GridItem.types';

describe('Test Component', () => {
  let props: IGridItemProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<GridItem {...props} />);

  it('should render with primary class by default', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--primary');
  });
  it('should render with padding class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--padding-x-s');
    expect(component).toHaveClass('rrui-grid__item--padding-y-s');
  });
  it('should render with correct padding class when padding props present', () => {
    props.paddingX = 'l';
    props.paddingY = 'xs';
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--padding-x-l');
    expect(component).toHaveClass('rrui-grid__item--padding-y-xs');
  });
  it('should render with danger class', () => {
    props.variant = 'danger';
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--danger');
  });
  it('should render with dark class', () => {
    props.variant = 'dark';
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--dark');
  });
  it('should render with light class', () => {
    props.variant = 'light';
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--light');
  });
  it('should render with success class', () => {
    props.variant = 'success';
    const { getByTestId } = renderComponent();

    const component = getByTestId('GridItem');

    expect(component).toHaveClass('rrui-grid__item--success');
  });


  it('should render with no id by default', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');

    expect(component[0].getAttribute('id')).toBeFalsy();
  });
  it('should render with aria-label attribute', () => {
    props.ariaLabel = 'ariaLabel';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');

    expect(component[0].getAttribute('aria-label')).toEqual('ariaLabel');
  });
  it('should render with aria-labelledby attribute', () => {
    props.ariaLabelledBy = 'ariaLabelledBy';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');

    expect(component[0].getAttribute('aria-labelledby')).toEqual(
      'ariaLabelledBy'
    );
  });

  it('should render as a <div> by default', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');
    // node names are in capitals

    expect(component[0].nodeName).toEqual('DIV');
  });
  it('should render as a <main> ', () => {
    props.tagName = 'main';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');
    // node names are in capitals

    expect(component[0].nodeName).toEqual('MAIN');
  });
  it('should render as a <aside> ', () => {
    props.tagName = 'aside';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');
    // node names are in capitals

    expect(component[0].nodeName).toEqual('ASIDE');
  });

  it('should render as a <section> ', () => {
    props.tagName = 'section';
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('GridItem');
    // node names are in capitals
    expect(component[0].nodeName).toEqual('SECTION');
  });
});
