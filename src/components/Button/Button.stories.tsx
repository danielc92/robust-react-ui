// Button.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { IButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'medium',
    variant: 'primary',
    children: 'Learn more',
    onClickFunction: () => {},
  },
} as Meta<IButtonProps>;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const PrimarySmall: Story<IButtonProps> = Template.bind({});
PrimarySmall.args = {
  size: 'small',
};

export const PrimaryMedium: Story<IButtonProps> = Template.bind({});
PrimaryMedium.args = {};

export const PrimaryLarge: Story<IButtonProps> = Template.bind({});
PrimaryLarge.args = {
  size: 'large',
};
export const DangerSmall: Story<IButtonProps> = Template.bind({});
DangerSmall.args = {
  size: 'small',
  variant: 'danger',
};

export const DangerMedium: Story<IButtonProps> = Template.bind({});
DangerMedium.args = {
  variant: 'danger',
};

export const DangerLarge: Story<IButtonProps> = Template.bind({});
DangerLarge.args = {
  size: 'large',
  variant: 'danger',
};
export const SuccessSmall: Story<IButtonProps> = Template.bind({});
SuccessSmall.args = {
  size: 'small',
  variant: 'success',
};

export const SuccessMedium: Story<IButtonProps> = Template.bind({});
SuccessMedium.args = {
  variant: 'success',
};

export const SuccessLarge: Story<IButtonProps> = Template.bind({});
SuccessLarge.args = {
  size: 'large',
  variant: 'success',
};
export const SecondarySmall: Story<IButtonProps> = Template.bind({});
SecondarySmall.args = {
  size: 'small',
  variant: 'secondary',
};

export const SecondaryMedium: Story<IButtonProps> = Template.bind({});
SecondaryMedium.args = {
  variant: 'secondary',
};

export const SecondaryLarge: Story<IButtonProps> = Template.bind({});
SecondaryLarge.args = {
  size: 'large',
  variant: 'secondary',
};
