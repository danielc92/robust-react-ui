// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";

export default {
  title: "Carousel",
  component: Carousel,
  args: {
    // Insert default args here
  },
} as Meta<CarouselProps>;

const Template: Story<CarouselProps> = (args) => {
  return <Carousel {...args} />;
};

export const Basic: Story<CarouselProps> = Template.bind({});
Basic.args = {}
