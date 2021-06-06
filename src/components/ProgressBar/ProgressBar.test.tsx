// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';
import { ProgressBarProps } from './ProgressBar.types';

describe('Progress Suite', () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      currentValue: 50,
    };
  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it('should render correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('dcui-progress');
  });
  it('should render correct class (2)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('dcui-progress--primary');
  });
  it('should render correct class (3)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('dcui-progress--medium');
  });

  it('should render correct class (4)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');

    expect(component).toHaveClass('dcui-progress__inner');
  });

  it('should render correct class (5)', () => {
    props.variant = 'danger';
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('dcui-progress--danger');
  });

  it('changing max value should change aria-valuemax', () => {
    props.maximumValue = 89;
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');
    expect(component.getAttribute('aria-valuemax')).toEqual('89');
  });

  it('should render correct aria attributes (1)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');
    expect(component.getAttribute('aria-valuenow')).toEqual('50');
  });
  it('should render correct aria attributes (2)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');
    expect(component.getAttribute('aria-valuemin')).toEqual('0');
  });
  it('should render correct aria attributes (3)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');
    expect(component.getAttribute('aria-valuemax')).toEqual('100');
  });
});
