// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from './Icon';
import Box from '../Box';
import { IIconProps } from './Icon.types';

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    // Insert default args here
  },
} as Meta<IIconProps>;

const Template: Story<IIconProps> = (args) => {
  return (
    <Icon {...args}>
      <Box />
    </Icon>
  );
};

export const Primary: Story<IIconProps> = Template.bind({});
Primary.args = {};
export const Danger: Story<IIconProps> = Template.bind({});
Danger.args = {
  variant: 'danger',
};
export const Success: Story<IIconProps> = Template.bind({});
Success.args = {
  variant: 'success',
};
export const CustomSize: Story<IIconProps> = Template.bind({});
CustomSize.args = {
  width: 50,
  height: 50,
};
