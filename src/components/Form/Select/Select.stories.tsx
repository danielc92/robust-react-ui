// Select.stories.tsx

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Select from "./Select";
import { FormSelectProps } from "./Select.types";
import FieldSet from "../FieldSet";
import Label from "../Label";

export default {
  title: "Components/Form/Select",
  component: Select,
  args: {
    id: "Select-example",
    values: [
      {
        displayValue: "Apple",
        keyValue: "a",
      },
      {
        displayValue: "Orange",
        keyValue: "o",
      },
      {
        displayValue: "Pear",
        keyValue: "p",
      },
      {
        displayValue: "Peace",
        keyValue: "p2",
      },
    ],
  },
} as Meta<FormSelectProps>;

const Template: Story<FormSelectProps> = (args) => {
  const [value, setValue] = useState("");
  const onChangeFunction = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(event.target.value);
  return (
    <FieldSet>
      <Label htmlFor="Select-example">Select Label</Label>
      <Select
        {...args}
        selectedValue={value}
        onChangeFunction={onChangeFunction}
      />
    </FieldSet>
  );
};

export const Basic: Story<FormSelectProps> = Template.bind({});
Basic.args = {};

export const Disabled: Story<FormSelectProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
