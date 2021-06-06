// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProgressBar from './ProgressBar';
import { ProgressBarProps } from './ProgressBar.types';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    currentValue: 60,
  },
} as Meta<ProgressBarProps>;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary: Story<ProgressBarProps> = Template.bind({});
Primary.args = {};
export const Danger: Story<ProgressBarProps> = Template.bind({});
Danger.args = { variant: 'danger', currentValue: 20 };
export const Secondary: Story<ProgressBarProps> = Template.bind({});
Secondary.args = { variant: 'secondary', currentValue: 80 };
export const Success: Story<ProgressBarProps> = Template.bind({});
Success.args = { variant: 'success' };

export const Small: Story<ProgressBarProps> = Template.bind({});
Small.args = { size: 'small' };
export const Medium: Story<ProgressBarProps> = Template.bind({});
Medium.args = { size: 'medium' };
export const Large: Story<ProgressBarProps> = Template.bind({});
Large.args = { size: 'large' };

export const PrimaryFullWidth: Story<ProgressBarProps> = Template.bind({});
Primary.args = { variant: 'primary', fullWidth: true };
