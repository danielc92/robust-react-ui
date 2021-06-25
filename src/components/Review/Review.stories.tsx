// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import Review from "./Review";
import { ReviewProps } from "./Review.types";

export default {
  title: "Review",
  component: Review,
  args: {
    // Insert default args here
  },
} as Meta<ReviewProps>;

const Template: Story<ReviewProps> = (args) => {
  return <Review {...args} />;
};

export const Basic: Story<ReviewProps> = Template.bind({});
Basic.args = {}
