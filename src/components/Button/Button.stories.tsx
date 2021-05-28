// Button.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Button",
  component: Button,
  args: {
    size: "medium",
    variant: "primary",
    children: "Learn more",
    onClickFunction: () => alert("Button has been clicked."),
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const PrimarySmall: Story<ButtonProps> = Template.bind({});
PrimarySmall.args = {
  size: "small",
};

export const PrimaryMedium: Story<ButtonProps> = Template.bind({});
PrimaryMedium.args = {};

export const PrimaryLarge: Story<ButtonProps> = Template.bind({});
PrimaryLarge.args = {
  size: "large",
};
export const DangerSmall: Story<ButtonProps> = Template.bind({});
PrimarySmall.args = {
  size: "small",
  variant: "danger",
};

export const DangerMedium: Story<ButtonProps> = Template.bind({});
PrimaryMedium.args = {
  variant: "danger",
};

export const DangerLarge: Story<ButtonProps> = Template.bind({});
PrimaryLarge.args = {
  size: "large",
  variant: "danger",
};
export const SuccessSmall: Story<ButtonProps> = Template.bind({});
PrimarySmall.args = {
  size: "small",
  variant: "success",
};

export const SuccessMedium: Story<ButtonProps> = Template.bind({});
PrimaryMedium.args = {
  variant: "success",
};

export const SuccessLarge: Story<ButtonProps> = Template.bind({});
PrimaryLarge.args = {
  size: "large",
  variant: "success",
};
