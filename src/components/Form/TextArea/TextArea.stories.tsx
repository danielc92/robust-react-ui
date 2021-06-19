// TextArea.stories.tsx

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import FieldSet from 'robust-react-ui/components/Form/FieldSet';
import Label from 'robust-react-ui/components/Form/Label';
import TextArea from './TextArea';
import { IFormTextAreaProps } from './TextArea.types';

export default {
  title: 'Components/Form/TextArea',
  component: TextArea,
  args: {
    id: 'TextArea-example',
    placeholder: 'Type some text',
  },
} as Meta<IFormTextAreaProps>;

const Template: Story<IFormTextAreaProps> = (args) => {
  const [value, setValue] = useState('');
  const onChangeFunction = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);
  return (
    <FieldSet>
      <Label htmlFor="TextArea-example">TextArea Label</Label>
      <TextArea
        id={args.id}
        placeholder={args.placeholder}
        value={value}
        onChangeFunction={onChangeFunction}
      />
    </FieldSet>
  );
};

export const Basic: Story<IFormTextAreaProps> = Template.bind({});
Basic.args = {};

export const Error: Story<IFormTextAreaProps> = Template.bind({});
Error.args = {
  error: true,
  errorMessage: 'Something went wrong',
};

export const Disabled: Story<IFormTextAreaProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
