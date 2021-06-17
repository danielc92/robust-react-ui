import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Label from 'robust-react-ui/components/Form/Label';
import FieldSet from 'robust-react-ui/components/Form/FieldSet';
import CheckboxGroup from './CheckboxGroup';
import {
  CheckboxOptionProps,
  FormCheckboxGroupProps,
} from './CheckboxGroup.types';

export default {
  title: 'Components/Form/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    id: 'CheckboxGroup-example',
    placeholder: 'Type some text',
    type: 'text',
    ariaLabelledBy: 'checkbox-label',
    values: [
      {
        displayValue: 'Apple',
        keyValue: 'a',
        checked: false,
      },
      {
        displayValue: 'Apricot',
        keyValue: 'a2',
        checked: false,
      },
      {
        displayValue: 'Watermelon',
        keyValue: 'w',
        checked: false,
      },
      {
        displayValue: 'Banana',
        keyValue: 'b',
        checked: false,
      },
      {
        displayValue: 'Peach',
        keyValue: 'p',
        checked: false,
      },
      {
        displayValue: 'Orange',
        keyValue: 'o',
        checked: false,
      },
    ],
  },
} as Meta<FormCheckboxGroupProps>;

const Template: Story<FormCheckboxGroupProps> = (args) => {
  const [values, setValues] = useState<CheckboxOptionProps[]>(args.values);

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
      <Label id="checkbox-label">Choose a fruit</Label>
      <CheckboxGroup
        {...args}
        values={values}
        onSelectFunction={onSelectFunction}
      />
    </FieldSet>
  );
};

export const Checked: Story<FormCheckboxGroupProps> = Template.bind({});
Checked.args = {
  values: [
    {
      displayValue: 'Apple',
      keyValue: 'a',
      checked: true,
    },
    {
      displayValue: 'Apricot',
      keyValue: 'a2',
      checked: true,
    },
    {
      displayValue: 'Watermelon',
      keyValue: 'w',
      checked: true,
    },
    {
      displayValue: 'Banana',
      keyValue: 'b',
      checked: true,
    },
    {
      displayValue: 'Peach',
      keyValue: 'p',
      checked: true,
    },
    {
      displayValue: 'Orange',
      keyValue: 'o',
      checked: true,
    },
  ],
};
export const Unchecked: Story<FormCheckboxGroupProps> = Template.bind({});
Unchecked.args = {};
