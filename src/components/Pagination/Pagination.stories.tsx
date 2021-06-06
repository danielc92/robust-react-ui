// Generated with util/create-component.js

import { Meta, Story } from '@storybook/react';
import React from 'react';
import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';

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
} as Meta<PaginationProps>;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Basic: Story<PaginationProps> = Template.bind({});

export const Rounded: Story<PaginationProps> = Template.bind({});
Rounded.args = {
  rounded: true,
};
