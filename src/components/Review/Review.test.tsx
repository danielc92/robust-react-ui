// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Review from './Review';
import { ReviewProps } from './Review.types';

describe('Test Component', () => {
  let props: ReviewProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Review {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Review');

    expect(component).toHaveTextContent('harvey was here');
  });
});
