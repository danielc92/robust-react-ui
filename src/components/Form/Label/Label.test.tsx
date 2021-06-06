import React from 'react';
import { render } from '@testing-library/react';
import { FormLabelProps } from './Label.types';
import Label from './Label';

describe('Label Suite', () => {
  let props: FormLabelProps;
  beforeEach(() => {
    props = {
      children: 'form label text',
      id: 'label-id',
      required: false,
    };
  });

  const renderComponent = () => render(<Label {...props} />);
  it('Renders with base class', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Label');
    expect(component).toHaveClass('dcui-form__label');
  });
  it('Renders with correct text', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Label');
    expect(component).toHaveTextContent('form label text');
  });
  it('Added required prop should render with asterix', () => {
    props.required = true;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Label');
    expect(component).toHaveTextContent('form label text*');
  });
  it('Should render with id', () => {
    props.required = true;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Label');
    expect(component.getAttribute('id')).toEqual('label-id');
  });
});
