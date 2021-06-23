// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProgressBar from './ProgressBar';
import { IProgressBarProps } from './ProgressBar.types';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    currentValue: 60,
  },
} as Meta<IProgressBarProps>;

const Template: Story<IProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary: Story<IProgressBarProps> = Template.bind({});
Primary.args = {};
export const Danger: Story<IProgressBarProps> = Template.bind({});
Danger.args = { variant: 'danger', currentValue: 20 };
export const Secondary: Story<IProgressBarProps> = Template.bind({});
Secondary.args = { variant: 'secondary', currentValue: 80 };
export const Success: Story<IProgressBarProps> = Template.bind({});
Success.args = { variant: 'success' };

export const Small: Story<IProgressBarProps> = Template.bind({});
Small.args = { size: 'small' };
export const Medium: Story<IProgressBarProps> = Template.bind({});
Medium.args = { size: 'medium' };
export const Large: Story<IProgressBarProps> = Template.bind({});
Large.args = { size: 'large' };

export const PrimaryFullWidth: Story<IProgressBarProps> = Template.bind({});
Primary.args = { variant: 'primary', fullWidth: true };
