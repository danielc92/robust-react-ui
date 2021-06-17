// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from './Icon';
import { IconProps } from './Icon.types';

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    // Insert default args here
  },
} as Meta<IconProps>;

const Template: Story<IconProps> = (args) => {
  return (
    <Icon {...args}>
      <Icon.Box />
    </Icon>
  );
};

export const Primary: Story<IconProps> = Template.bind({});
Primary.args = {};
export const Danger: Story<IconProps> = Template.bind({});
Danger.args = {
  variant: 'danger',
};
export const Success: Story<IconProps> = Template.bind({});
Success.args = {
  variant: 'success',
};
export const CustomSize: Story<IconProps> = Template.bind({});
CustomSize.args = {
  width: 50,
  height: 50,
};
