// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { IBreadcrumbsProps } from './Breadcrumbs.types';

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
} as Meta<IBreadcrumbsProps>;

const Template: Story<IBreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Small: Story<IBreadcrumbsProps> = Template.bind({});
Small.args = { size: 'small' };

export const Medium: Story<IBreadcrumbsProps> = Template.bind({});
Medium.args = {};

export const Large: Story<IBreadcrumbsProps> = Template.bind({});
Large.args = { size: 'large' };
