// Generated with util/create-component.js

import { Meta, Story } from '@storybook/react';
import React from 'react';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    data: [
      {
        current: false,
        href: '#',
        pageNumber: 1,
      },
      {
        current: true,
        href: '#',
        pageNumber: 2,
      },
      {
        current: false,
        href: '#',
        pageNumber: 3,
      },
      {
        current: false,
        href: '#',
        pageNumber: 4,
      },
      {
        current: false,
        href: '#',
        pageNumber: 5,
      },
      {
        current: false,
        href: '#',
        pageNumber: 6,
      },
    ],
  },
} as Meta<IPaginationProps>;

const Template: Story<IPaginationProps> = (args) => (
  <Pagination
    data={args.data}
    ariaLabel={args.ariaLabel}
    rounded={args.rounded}
  />
);

export const Basic: Story<IPaginationProps> = Template.bind({});

export const Rounded: Story<IPaginationProps> = Template.bind({});
Rounded.args = {
  rounded: true,
};
