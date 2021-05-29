// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import Image from "./Image";
import src from "./assets/xavi-cabrera-kn-UmDZQDjM-unsplash.jpg";
import { ImageProps } from "./Image.types";

export default {
  title: "Image",
  component: Image,
  args: {
    alt: "Lego pieces on the floor.",
    src,
    width: 800,
    height: 475,
  },
} as Meta<ImageProps>;

const Template: Story<ImageProps> = (args) => {
  return <Image {...args} />;
};

export const Basic: Story<ImageProps> = Template.bind({});

export const ScalingUnrestricted: Story<ImageProps> = Template.bind({});
ScalingUnrestricted.args = {
  scaling: "unrestricted",
};
export const ScalingRestricted: Story<ImageProps> = Template.bind({});
ScalingRestricted.args = {
  scaling: "restricted-width",
};
export const Bordered: Story<ImageProps> = Template.bind({});
Bordered.args = {
  bordered: true,
  scaling: "restricted-width",
};
export const Circular: Story<ImageProps> = Template.bind({});
Circular.args = {
  circle: true,
  width: 300,
  height: 300,
};
