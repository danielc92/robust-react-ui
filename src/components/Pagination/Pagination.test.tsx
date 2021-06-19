// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';

describe('Pagination Suite', () => {
  let props: IPaginationProps;

  beforeEach(() => {
    props = {
      data: [
        {
          current: false,
          pageNumber: 1,
          href: '#',
        },
        {
          current: true,
          pageNumber: 2,
          href: '#',
        },
        {
          current: false,
          pageNumber: 3,
          href: '#',
        },
      ],
    };
  });

  const renderComponent = () => render(<Pagination {...props} />);

  it('base should render the correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Pagination');

    expect(component).toHaveClass('dcui-pagination');
  });

  it('wrapper should render the correct class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('PaginationWrapper');

    expect(component).toHaveClass('dcui-pagination__wrapper');
  });

  it('button should render the correct class', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('PaginationButton');

    expect(components[0]).toHaveClass('dcui-pagination__button');
  });

  it('button should render with the correct text', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('PaginationButton');

    expect(components[0]).toHaveTextContent('1');
  });
  it('button should render with the correct text (2)', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('PaginationButton');

    expect(components[1]).toHaveTextContent('2');
  });

  it('second button should have the aria-current attribute', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('PaginationButton');

    expect(components[1]).toHaveAttribute('aria-current');
  });
  it('second button should render the current class', () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId('PaginationButton');

    expect(components[1]).toHaveClass('dcui-pagination__button--current');
  });
});
