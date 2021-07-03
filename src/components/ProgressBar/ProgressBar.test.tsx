// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';
import { IProgressBarProps } from './ProgressBar.types';

describe('Progress Suite', () => {
  let props: IProgressBarProps;

  beforeEach(() => {
    props = {
      currentValue: 50,
    };
  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it('should render with the default aria label', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');

    expect(component.getAttribute('aria-label')).toEqual('Progress bar');
  });
  it('should render with the custom aria label', () => {
    props.ariaLabel = 'daniels aria label';
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');

    expect(component.getAttribute('aria-label')).toEqual('daniels aria label');
  });

  it('should render correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('rrui-progress');
  });
  it('should render correct class (2)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('rrui-progress--primary');
  });
  it('should render correct class (3)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('rrui-progress--medium');
  });

  it('should render correct class (4)', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBarInner');

    expect(component).toHaveClass('rrui-progress__inner');
  });

  it('should render correct class (5)', () => {
    props.variant = 'danger';
    const { getByTestId } = renderComponent();

    const component = getByTestId('ProgressBar');

    expect(component).toHaveClass('rrui-progress--danger');
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
