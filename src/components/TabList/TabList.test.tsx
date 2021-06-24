// Generated with util/create-component.js
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import TabList from './TabList';
import { ITabListProps } from './TabList.types';

describe('TabList Suite', () => {
  let props: ITabListProps;

  beforeEach(() => {
    props = {
      tabs: [
        {
          buttonId: 'apple',
          buttonLabel: 'Apples',
          tabContent:
            'Irure in mollit laboris pariatur officia amet laboris aliqua duis culpa enim eu. Laborum proident occaecat ad officia esse. Nulla nostrud aliqua aute tempor. Cupidatat magna pariatur excepteur irure aliqua cillum qui laborum. Culpa consequat mollit id aute nulla irure incididunt sint ipsum irure aute.',
          tabId: 'apple-tab',
        },
        {
          buttonId: 'banana',
          buttonLabel: 'Banana',
          tabContent: 'Information about tropical bananas.',
          tabId: 'banana-tab',
        },
      ],
      ariaLabel: 'Tab list',
      fullWidth: true,
    };
  });

  const renderComponent = () => render(<TabList {...props} />);

  it('Should render correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('TabList');
    expect(component).toHaveClass('rrui-tablist');
  });

  it('Tab button should render with correct class', () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListButton');

    expect(component[0]).toHaveClass('rrui-tablist__button');
  });

  it('Tab button should be multiple (2)', () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListButton');

    expect(component).toHaveLength(2);
  });

  it("First Tab button should have text 'Apple'", () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListButton');

    expect(component[0]).toHaveTextContent('Apple');
  });

  it("Second Tab button should have text 'Banana'", () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListButton');

    expect(component[0]).toHaveTextContent('Apple');
  });

  it('Panel should render 2 items', () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListPanel');
    expect(component).toHaveLength(2);
  });
  it('Second panel should render correct text', () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListPanel');
    expect(component[1]).toHaveTextContent(
      'Information about tropical bananas.'
    );
  });
  it('Panel should render correct class', () => {
    const { getAllByTestId } = renderComponent();
    const component = getAllByTestId('TabListPanel');
    expect(component[0]).toHaveClass('rrui-tablist__panel');
  });
  it("Should be 1 'tablist' role", () => {
    const { getAllByRole } = renderComponent();
    const component = getAllByRole('tablist');
    expect(component).toHaveLength(1);
  });
  it("Should be 2 'tab' role", () => {
    const { getAllByRole } = renderComponent();
    const component = getAllByRole('tab');
    expect(component).toHaveLength(2);
  });
  it("Should be 2 'tabpanel' role", () => {
    const { getAllByRole } = renderComponent();
    const component = getAllByRole('tabpanel');
    expect(component).toHaveLength(2);
  });
  it('First button should have active modifier class by default', () => {
    const { getAllByTestId } = renderComponent();
    const buttons = getAllByTestId('TabListButton');

    expect(
      expect(buttons[0]).toHaveClass('rrui-tablist__button--active')
    ).toBeFalsy();
  });

  it('Second button should have active modifier class when clicked', () => {
    const { getAllByTestId } = renderComponent();
    const buttons = getAllByTestId('TabListButton');

    fireEvent(
      buttons[1],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(buttons[1]).toHaveClass('rrui-tablist__button--active');
  });
});
