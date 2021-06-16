// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import TextArea from './TextArea';
import { FormTextAreaProps } from './TextArea.types';

describe('Form TextArea Suite', () => {
  let props: FormTextAreaProps;
  beforeEach(() => {
    props = {
      value: 'welcome to the jungle',
      id: 'sample-input',
      placeholder: 'type text',
      name: 'sample-input-name',
      onChangeFunction: () => {},
    };
  });
  const renderComponent = () => render(<TextArea {...props} />);

  it('TextArea should render the correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextArea');

    expect(component).toHaveClass('dcui-form__textarea');
  });
  it("TextArea should render with name attribute", ()=>{
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextArea');

    expect(component.getAttribute('name')).toEqual('sample-input-name');
  })
  it('TextArea should render the correct value', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextArea');
    expect(component).toHaveValue('welcome to the jungle');
  });
  it('TextArea should render with error', () => {
    props.error = true;
    props.errorMessage = 'an error has occured!';
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextAreaWrapper');
    expect(
      component.getElementsByClassName('dcui-form__textarea-error')
    ).toHaveLength(1);
  });
  it('TextArea should render with error message', () => {
    props.error = true;
    props.errorMessage = 'an error has occured!';
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextAreaWrapper');
    expect(
      component.getElementsByClassName('dcui-form__textarea-error')[0]
    ).toHaveTextContent('an error has occured!');
  });
});
