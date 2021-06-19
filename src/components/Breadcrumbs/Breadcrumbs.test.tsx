// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumbs from './Breadcrumbs';
import { IBreadcrumbsProps } from './Breadcrumbs.types';

describe('Breadcrumb suite', () => {
  let props: IBreadcrumbsProps;

  beforeEach(() => {
    props = {
      data: [
        {
          isCurrent: false,
          linkHref: '#',
          linkText: 'Nuhten',
        },
        {
          isCurrent: false,
          linkHref: '#',
          linkText: 'Delore',
        },
        {
          isCurrent: false,
          linkHref: '#',
          linkText: 'Ipsum',
        },
        {
          isCurrent: true,
          linkHref: '#',
          linkText: 'Lorem',
        },
      ],
    };
  });

  const renderComponent = () => render(<Breadcrumbs {...props} />);

  it('should render base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Breadcrumbs');

    expect(component).toHaveClass('dcui-breadcrumbs');
  });
});
