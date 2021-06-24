// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import CheckboxGroup from './CheckboxGroup';
import { IFormCheckboxGroupProps } from './CheckboxGroup.types';

describe('Form Input Suite', () => {
  let props: IFormCheckboxGroupProps;
  beforeEach(() => {
    props = {
      values: [
        {
          checked: true,
          keyValue: '001',
          displayValue: 'Oranges',
        },
        {
          checked: true,
          keyValue: '002',
          displayValue: 'Watermelon',
        },
        {
          checked: false,
          keyValue: '003',
          displayValue: 'Apples',
        },
      ],
      ariaLabelledBy: 'checkbox-label',
      id: 'checkbox-id',
      onSelectFunction: () => {},
    };
  });
  const renderComponent = () => render(<CheckboxGroup {...props} />);

  it('CheckboxGroup should render the correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('CheckboxGroup');

    expect(component).toHaveClass('rrui-form__checkbox-group');
  });

  it('Should render 3 Checkboxes', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('Checkbox');
    expect(components).toHaveLength(3);
  });

  it('First checkbox should have aria-checked true', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('Checkbox');
    expect(components[0].getAttribute('aria-checked')).toEqual('true');
  });
  it('Second checkbox should have aria-checked true', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('Checkbox');
    expect(components[1].getAttribute('aria-checked')).toEqual('true');
  });
  it('Third checkbox should have aria-checked false', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('Checkbox');
    expect(components[2].getAttribute('aria-checked')).toEqual('false');
  });

  it("First checkbox should have text 'Oranges'", () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('Checkbox');
    expect(components[0]).toHaveTextContent('Oranges');
  });

  it("Second checkbox should have text 'Watermelon'", () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('Checkbox');
    expect(components[1]).toHaveTextContent('Watermelon');
  });
});
