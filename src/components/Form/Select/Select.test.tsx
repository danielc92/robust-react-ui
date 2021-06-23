// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Select from './Select';
import { IFormSelectProps } from './Select.types';

describe('Form Select Suite', () => {
  let props: IFormSelectProps;
  beforeEach(() => {
    props = {
      values: [
        {
          displayValue: 'option 1',
          keyValue: 'opt1',
        },
        {
          displayValue: 'option 2',
          keyValue: 'opt2',
        },
        {
          displayValue: 'option 3',
          keyValue: 'opt3',
        },
      ],
      id: 'example-select',
      selectedValue: 'opt1',
      onChangeFunction: () => {},
    };
  });
  const renderComponent = () => render(<Select {...props} />);

  it('Select should render the correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Select');

    expect(component).toHaveClass('dcui-form__select');
  });
  it('Select should render the correct value', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Select');
    expect(component).toHaveValue('opt1');
  });

  it('Select should render exactly 3 values', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('SelectOption');
    expect(components).toHaveLength(3);
  });
  it('Select option should have the correct text', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('SelectOption');
    expect(components[2]).toHaveTextContent('option 3');
  });
  it('Select option should render as option', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('SelectOption');
    expect(components[2].nodeName).toEqual('OPTION');
  });
});
