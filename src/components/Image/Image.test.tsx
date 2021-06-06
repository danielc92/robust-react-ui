// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Image from './Image';
import { ImageProps } from './Image.types';

describe('Test Component', () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      alt: 'daniels image',
      src: 'https://i.picsum.photos/id/703/800/400.jpg',
      height: 400,
      width: 800,
    };
  });

  const renderComponent = () => render(<Image {...props} />);

  it('should render with correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Image');
    expect(component).toHaveClass('dcui-image');
  });

  it('should render with correct bordered class', () => {
    props.bordered = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Image');
    expect(component).toHaveClass('dcui-image--bordered');
  });

  it('should render with correct circle class', () => {
    props.circle = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Image');
    expect(component).toHaveClass('dcui-image--circle');
  });

  it('should render with correct responsive class', () => {
    props.scaling = 'unrestricted';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Image');
    expect(component).toHaveClass('dcui-image--responsive');
  });

  it('should render with correct responsive class (2)', () => {
    props.scaling = 'restricted-width';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Image');
    expect(component).toHaveClass('dcui-image--responsive-restrict-width');
  });
});
