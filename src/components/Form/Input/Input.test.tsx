// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';
import { FormInputProps } from './Input.types';

describe('Form Input Suite', () => {
  let props: FormInputProps;
  beforeEach(() => {
    props = {
      value: 'welcome to the jungle',
      id: 'sample-input',
      placeholder: 'type text',
      onChangeFunction: () => {},
    };
  });
  const renderComponent = () => render(<Input {...props} />);

  it('Input should render the correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Input');

    expect(component).toHaveClass('dcui-form__input');
  });
  it('Input should render the correct value', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Input');
    expect(component).toHaveValue('welcome to the jungle');
  });
});
