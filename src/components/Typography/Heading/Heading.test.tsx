// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Heading from './Heading';
import { IHeadingProps } from './Heading.types';

describe('Heading Suite', () => {
  let props: IHeadingProps;

  beforeEach(() => {
    props = {
      children: 'hello world',
      id: 'heading',
    };
  });

  const renderComponent = () => render(<Heading {...props} />);

  it('should render text correct', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveTextContent('hello world');
  });

  it('should contain correct base class', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header');
  });

  it('should contain correct level class', () => {
    props.level = 1;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header__1');
  });
  it('should contain correct tag name (h1)', () => {
    props.level = 1;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component.nodeName).toEqual('H1');
  });

  it('should contain correct level class', () => {
    props.level = 2;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header__2');
  });
  it('should contain correct tag name (h2)', () => {
    props.level = 2;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component.nodeName).toEqual('H2');
  });

  it('should contain correct level class', () => {
    props.level = 3;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header__3');
  });
  it('should contain correct tag name (h3)', () => {
    props.level = 3;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component.nodeName).toEqual('H3');
  });

  it('should contain correct level class', () => {
    props.level = 4;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header__4');
  });
  it('should contain correct tag name (h3)', () => {
    props.level = 4;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component.nodeName).toEqual('H4');
  });

  it('should contain correct level class', () => {
    props.level = 5;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header__5');
  });
  it('should contain correct tag name (h5)', () => {
    props.level = 5;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component.nodeName).toEqual('H5');
  });

  it('should contain correct level class', () => {
    props.level = 6;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component).toHaveClass('rrui-header__6');
  });
  it('should contain correct tag name (h6)', () => {
    props.level = 6;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Heading');
    expect(component.nodeName).toEqual('H6');
  });
});
