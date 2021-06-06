// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BreadcrumbsProps } from './Breadcrumbs.types';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  args: {
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
  },
} as Meta<BreadcrumbsProps>;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Small: Story<BreadcrumbsProps> = Template.bind({});
Small.args = { size: 'small' };

export const Medium: Story<BreadcrumbsProps> = Template.bind({});
Medium.args = {};

export const Large: Story<BreadcrumbsProps> = Template.bind({});
Large.args = { size: 'large' };
