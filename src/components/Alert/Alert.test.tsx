// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Alert from './Alert';
import { IAlertProps } from './Alert.types';

describe('Alert Suite', () => {
  let props: IAlertProps;

  beforeEach(() => {
    props = {
      variant: 'primary',
      children: 'alert message',
    };
  });

  const renderComponent = () => render(<Alert {...props} />);

  it('should render base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Alert');

    expect(component).toHaveClass('rrui-alert');
  });
  it('should render primary modifier class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Alert');

    expect(component).toHaveClass('rrui-alert--primary');
  });
  it('should render danger modifier class', () => {
    props.variant = 'danger';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Alert');

    expect(component).toHaveClass('rrui-alert--danger');
  });
  it('should render success modifier class', () => {
    props.variant = 'success';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Alert');

    expect(component).toHaveClass('rrui-alert--success');
  });
  it('should render full width modifier class', () => {
    props.fullWidth = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Alert');

    expect(component).toHaveClass('rrui-alert--full-width');
  });

  it('should render correct text', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Alert');

    expect(component).toHaveTextContent('alert message');
  });
  it('should have alert role', () => {
    const { getByRole } = renderComponent();

    const component = getByRole('alert');

    expect(component).toBeDefined();
  });
});
