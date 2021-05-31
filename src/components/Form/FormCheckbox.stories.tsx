// CheckboxGroup.stories.tsx

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Form from "./Form";
import { CheckboxOptionProps, FormCheckboxGroupProps } from "./Form.types";
const { CheckboxGroup, Label, FieldSet } = Form;

export default {
  title: "Components/Form/CheckboxGroup",
  component: CheckboxGroup,
  args: {
    id: "CheckboxGroup-example",
    placeholder: "Type some text",
    type: "text",
    ariaLabelledBy: "checkbox-label",
  },
} as Meta<FormCheckboxGroupProps>;

const Template: Story<FormCheckboxGroupProps> = (args) => {
  const initialValues: CheckboxOptionProps[] = [
    {
      displayValue: "Go for apples",
      keyValue: "a",
      checked: false,
    },
    {
      displayValue: "Go for watermelon",
      keyValue: "c",
      checked: false,
    },
    {
      displayValue: "Go for oranges",
      keyValue: "b",
      checked: false,
    },
    {
      displayValue: "Go for banans",
      keyValue: "d",
      checked: false,
    },
  ];

  const [values, setValues] = useState<CheckboxOptionProps[]>(initialValues);

  const onSelectFunction = (keyValue: string, checked: boolean) => {
    setValues(
      values.map((option) => {
        if (option.keyValue === keyValue) {
          return { ...option, checked };
        }
        return option;
      })
    );
  };
  return (
    <FieldSet>
      <Label id="checkbox-label">CheckboxGroup Label</Label>
      <CheckboxGroup
        {...args}
        values={values}
        onSelectFunction={onSelectFunction}
      />
    </FieldSet>
  );
};

export const Basic: Story<FormCheckboxGroupProps> = Template.bind({});
Basic.args = {};
