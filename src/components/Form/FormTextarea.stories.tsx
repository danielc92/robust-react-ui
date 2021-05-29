// TextArea.stories.tsx

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Form from "./Form";
import { FormTextAreaProps } from "./Form.types";
const { TextArea, Label, FieldSet } = Form;

export default {
  title: "TextArea",
  component: TextArea,
  args: {
    id: "TextArea-example",
    placeholder: "Type some text",
  },
} as Meta<FormTextAreaProps>;

const Template: Story<FormTextAreaProps> = (args) => {
  const [value, setValue] = useState("");
  const onChangeFunction = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);
  return (
    <FieldSet>
      <Label htmlFor="TextArea-example">TextArea Label</Label>
      <TextArea {...args} value={value} onChangeFunction={onChangeFunction} />
    </FieldSet>
  );
};

export const Basic: Story<FormTextAreaProps> = Template.bind({});
Basic.args = {};

export const Error: Story<FormTextAreaProps> = Template.bind({});
Error.args = {
  error: true,
  errorMessage: "Something went wrong",
};

export const Disabled: Story<FormTextAreaProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
