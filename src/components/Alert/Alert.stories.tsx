// Generated with util/create-component.js
import React from "react";
import Alert from "./Alert";
import { Meta, Story } from "@storybook/react";
import { AlertProps } from "./Alert.types";

export default {
  title: "Alert",
  component: Alert,
  args: {},
} as Meta<AlertProps>;

const Template: Story<AlertProps> = (args) => {
  return (
    <Alert {...args}>
      <p className="dcui-para dcui-para--medium">
        Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad
        eiusmod proident adipisicing.
      </p>
    </Alert>
  );
};

export const Primary: Story<AlertProps> = Template.bind({});
Primary.args = {};
export const Danger: Story<AlertProps> = Template.bind({});
Danger.args = {
  variant: "danger",
};
export const Success: Story<AlertProps> = Template.bind({});
Success.args = {
  variant: "success",
};
