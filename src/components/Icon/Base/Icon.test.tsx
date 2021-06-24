// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Icon from './Icon';
import Box from '../Box';
import { IIconProps } from './Icon.types';

describe('Icon Suite', () => {
  let props: Partial<IIconProps>;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <Icon {...props}>
        <Box />
      </Icon>
    );

  it('should render with base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    expect(component).toHaveClass('rrui-icon');
  });

  it('should render with primary variant class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    expect(component).toHaveClass('rrui-icon--primary');
  });

  it('should render with primary danger class', () => {
    props.variant = 'danger';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    expect(component).toHaveClass('rrui-icon--danger');
  });

  it('should render with dark danger class', () => {
    props.variant = 'dark';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    expect(component).toHaveClass('rrui-icon--dark');
  });

  it('should render with success danger class', () => {
    props.variant = 'success';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    expect(component).toHaveClass('rrui-icon--success');
  });

  it('should render with custom dimensions', () => {
    props.height = 56;
    props.width = 27;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    // Note: attribute passed in as number prop, but test for string
    expect(component.getAttribute('width')).toEqual('27');
    expect(component.getAttribute('height')).toEqual('56');
  });

  it('should render with path node(s)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Icon');

    expect(component.getElementsByTagName('path')).toBeTruthy;
  });
});
