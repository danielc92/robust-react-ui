// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Link from './Link';
import { ILinkProps } from './Link.types';

describe('Test Component', () => {
  let props: ILinkProps;

  beforeEach(() => {
    props = {
      children: 'around the world',
      href: 'https://google.com.au',
      ariaLabel: 'a link to the world map',
    };
  });

  const renderComponent = () => render(<Link {...props} />);

  it('should render with an aria-label attribute', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Link');

    expect(component.hasAttribute('aria-label')).toBeTruthy();
  });

  it('should render with correct text', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Link');

    expect(component).toHaveTextContent('around the world');
  });

  it('should render with a href', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Link');

    expect(component.hasAttribute('href')).toBeTruthy();
  });
  it('should render with correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Link');

    expect(component).toHaveClass('rrui-link');
  });
});
