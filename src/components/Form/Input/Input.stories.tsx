import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Label from "../Label";
import FieldSet from "../FieldSet";
import { FormInputProps } from "./Input.types";
import Input from "./Input";

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
  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "Changing to ->");
    setValue(event.target.value);
  };
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
export const Date: Story<FormInputProps> = Template.bind({});
Date.args = {
  type: "date",
};
export const DateError: Story<FormInputProps> = Template.bind({});
DateError.args = {
  type: "date",
  error: true,
  errorMessage: "Sorry, the date entered is invalid!",
};
export const DateDisabled: Story<FormInputProps> = Template.bind({});
DateDisabled.args = {
  type: "date",
  disabled: true,
};
