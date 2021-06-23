// Button.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Paragraph from './Paragraph';
import { IParagraphProps } from './Paragraph.types';

export default {
  title: 'Components/Typography/Paragraph',

  component: Paragraph,
  args: {
    children:
      'Ea esse mollit dolor mollit qui minim ex cillum minim ex cupidatat enim veniam ea. Velit sit aliquip amet consequat sint adipisicing non ad nostrud aliquip et pariatur. Nulla culpa non ea exercitation culpa laborum dolore commodo. Velit ex non tempor ea. Sit veniam aliquip tempor enim nulla culpa.',
  },
} as Meta<IParagraphProps>;

const Template: Story<IParagraphProps> = (args) => <Paragraph {...args} />;

export const Small: Story<IParagraphProps> = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium: Story<IParagraphProps> = Template.bind({});

export const Large: Story<IParagraphProps> = Template.bind({});
Large.args = {
  size: 'large',
};

export const Bolded: Story<IParagraphProps> = Template.bind({});
Bolded.args = {
  bolded: true,
};
