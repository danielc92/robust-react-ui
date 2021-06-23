// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { IButtonProps } from './Button.types';

describe('Test Component', () => {
  let props: IButtonProps;

  beforeEach(() => {
    props = {
      children: 'click me',
      id: 'buttonid',
      size: 'medium',
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should render the correct text', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Button');

    expect(component).toHaveTextContent('click me');
  });

  it('should render the correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Button');

    expect(component).toHaveClass('dcui-button');
  });

  it('should render the correct variant class', () => {
    props.variant = 'danger';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Button');

    expect(component).toHaveClass('dcui-button--danger');
  });

  it('should render the correct variant class (2)', () => {
    props.variant = 'success';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Button');

    expect(component).toHaveClass('dcui-button--success');
  });

  it('should render the default primary modifier', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Button');

    expect(component).toHaveClass('dcui-button--primary');
  });

  it('should render the secondary class modifier', () => {
    props.variant = 'secondary';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Button');

    expect(component).toHaveClass('dcui-button--secondary');
  });
});
