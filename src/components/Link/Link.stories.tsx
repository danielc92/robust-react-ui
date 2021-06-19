// Generated with util/create-component.js
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Link from './Link';
import { ILinkProps } from './Link.types';

export default {
  title: 'Components/Link',
  args: {
    children: 'learn more about',
    href: 'https://github.com/danielc92/robust-react-ui',
    ariaLabel: 'daniels github repo',
  },
} as Meta<ILinkProps>;

const Template: Story<ILinkProps> = (args) => <Link {...args} />;

export const Small: Story<ILinkProps> = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium: Story<ILinkProps> = Template.bind({});
Medium.args = {};

export const Large: Story<ILinkProps> = Template.bind({});
Large.args = {
  size: 'large',
};
