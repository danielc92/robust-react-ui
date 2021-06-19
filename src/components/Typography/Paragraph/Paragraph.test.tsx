// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';
import { IParagraphProps } from './Paragraph.types';

describe('Paragraph Suite', () => {
  let props: IParagraphProps;

  beforeEach(() => {
    props = {
      children: 'hello world',
      id: 'para',
      size: 'large',
    };
  });

  const renderComponent = () => render(<Paragraph {...props} />);

  it('should render text correct', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Paragraph');
    expect(component).toHaveTextContent('hello world');
  });

  it('should contain correct base class', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Paragraph');
    expect(component).toHaveClass('dcui-para');
  });

  it('should contain the large class modifier', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Paragraph');
    expect(component).toHaveClass('dcui-para--large');
  });
  it('should render with bolded class modifier', () => {
    props.bolded = true;
    const { getByTestId } = renderComponent();
    const component = getByTestId('Paragraph');
    expect(component).toHaveClass('dcui-para--bolded');
  });
});
