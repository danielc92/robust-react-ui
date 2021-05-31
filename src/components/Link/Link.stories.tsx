// Generated with util/create-component.js
import React from "react";
import Link from "./Link";
import { LinkProps } from "./Link.types";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Link",
  args: {
    children: "learn more about",
    href: "https://github.com/danielc92/dc-react-ui",
    ariaLabel: "daniels github repo",
  },
} as Meta<LinkProps>;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Small: Story<LinkProps> = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium: Story<LinkProps> = Template.bind({});
Medium.args = {};

export const Large: Story<LinkProps> = Template.bind({});
Large.args = {
  size: "large",
};
