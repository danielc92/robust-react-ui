// Generated with util/create-component.js
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import AutoComplete from './AutoComplete';
import { AutoCompleteProps } from './AutoComplete.types';

describe('Autocomplete Suite', () => {
  let props: AutoCompleteProps;

  beforeEach(() => {
    props = {
      options: ['banana', 'apple', 'orange', 'pear'],
      labelId: 'my-autocomplete',
      labelText: 'choose food',
      value: 'term',
      onSelectOptionFunction: () => {},
      onChangeFunction: () => {},
      onClearOptionsFunction: () => {},
    };
  });

  const renderComponent = () => render(<AutoComplete {...props} />);

  it('should render with base class.', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('AutoComplete');

    expect(component).toHaveClass('dcui-autocomplete');
  });

  it('should render 4 list elements', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('AutoCompleteResult');
    expect(components).toHaveLength(4);
  });

  it('list results should have correct class', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('AutoCompleteResult');
    expect(components[0]).toHaveClass('dcui-autocomplete__result');
  });
  it('list result should have selected modifier class on mouse over event', () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('AutoCompleteResult');
    fireEvent(
      components[0],
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(components[0]).toHaveClass('dcui-autocomplete__result--selected');
  });
  it("list result should have aria-selected 'true' on mouse over event", () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId('AutoCompleteResult');
    fireEvent(
      components[0],
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(components[0].getAttribute('aria-selected')).toEqual('true');
  });

  it('Label should render with correct text', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('AutoCompleteLabel');
    expect(component).toHaveTextContent('choose food');
  });

  it('Label should render with correct class', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('AutoCompleteLabel');
    expect(component).toHaveClass('dcui-autocomplete__label');
  });

  it('Input should render', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('AutoCompleteInput');
    expect(component.nodeName).toEqual('INPUT');
  });

  it('Listbox should render with correct class', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('AutoCompleteListBox');
    expect(component).toHaveClass('dcui-autocomplete__listbox');
  });

  it('Listbox should render with --show modifier class', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('AutoCompleteListBox');
    expect(component).toHaveClass('dcui-autocomplete__listbox--show');
  });
});
