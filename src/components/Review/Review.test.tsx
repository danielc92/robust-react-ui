// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Review from './Review';
import { IReviewProps } from './Review.types';

describe('Test Component', () => {
  let props: IReviewProps;

  beforeEach(() => {
    props = {
      currentValue: 2,
      onCrossClickFunction: () => {},
      onStarClickFunction: () => {},
      formId: 'review-form',
    };
  });

  const renderComponent = () => render(<Review {...props} />);

  it('should render base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Review');

    expect(component).toHaveClass('rrui-review');
  });
  it('should render medium size class by default', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Review');

    expect(component).toHaveClass('rrui-review--medium');
  });
  it('should render small size class ', () => {
    props.size = 'small';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Review');

    expect(component).toHaveClass('rrui-review--small');
  });
  it('should render large size class', () => {
    props.size = 'large';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Review');

    expect(component).toHaveClass('rrui-review--large');
  });
  it('should render 5 stars', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('ReviewStar');

    expect(components).toHaveLength(5);
  });

  it('stars 1, 2 should BE filled', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('ReviewStar');

    expect(components[0].classList.contains('rrui-review__checked')).toBe(true);
    expect(components[1].classList.contains('rrui-review__checked')).toBe(true);
  });
  it('stars 3, 4, 5 should NOT be filled', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('ReviewStar');

    expect(components[2].classList.contains('rrui-review__checked')).toBe(
      false
    );
    expect(components[3].classList.contains('rrui-review__checked')).toBe(
      false
    );
    expect(components[4].classList.contains('rrui-review__checked')).toBe(
      false
    );
  });
});
