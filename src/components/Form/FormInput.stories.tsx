// Input.stories.tsx

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Form from "./Form";
import { FormInputProps } from "./Form.types";
const { Input, Label, FieldSet } = Form;

export default {
  title: "Components/Form/Input",
  component: Input,
  args: {
    id: "input-example",
    placeholder: "Type some text",
    type: "text",
  },
} as Meta<FormInputProps>;

const Template: Story<FormInputProps> = (args) => {
  const [value, setValue] = useState("");
  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <FieldSet>
      <Label htmlFor="input-example" required>
        Input Label
      </Label>
      <Input {...args} value={value} onChangeFunction={onChangeFunction} />
    </FieldSet>
  );
};

export const Text: Story<FormInputProps> = Template.bind({});
Text.args = {};

export const TextError: Story<FormInputProps> = Template.bind({});
TextError.args = {
  type: "text",
  error: true,
  errorMessage: "Something went wrong",
};

export const TextDisabled: Story<FormInputProps> = Template.bind({});
TextDisabled.args = {
  disabled: true,
};

export const Password: Story<FormInputProps> = Template.bind({});
Password.args = {
  type: "password",
};
