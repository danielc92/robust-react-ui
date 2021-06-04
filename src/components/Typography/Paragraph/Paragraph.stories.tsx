// Button.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import Paragraph from "./Paragraph";
import { ParagraphProps } from "./Paragraph.types";

export default {
  title: "Components/Typography/Paragraph",

  component: Paragraph,
  args: {
    children:
      "Ea esse mollit dolor mollit qui minim ex cillum minim ex cupidatat enim veniam ea. Velit sit aliquip amet consequat sint adipisicing non ad nostrud aliquip et pariatur. Nulla culpa non ea exercitation culpa laborum dolore commodo. Velit ex non tempor ea. Sit veniam aliquip tempor enim nulla culpa.",
  },
} as Meta<ParagraphProps>;

const Template: Story<ParagraphProps> = (args) => {
  return <Paragraph {...args} />;
};

export const Small: Story<ParagraphProps> = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium: Story<ParagraphProps> = Template.bind({});

export const Large: Story<ParagraphProps> = Template.bind({});
Large.args = {
  size: "large",
};

export const Bolded: Story<ParagraphProps> = Template.bind({});
Bolded.args = {
  bolded: true,
};
