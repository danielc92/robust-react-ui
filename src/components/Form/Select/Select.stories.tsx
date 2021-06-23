// Select.stories.tsx

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import FieldSet from 'robust-react-ui/components/Form/FieldSet';
import Label from 'robust-react-ui/components/Form/Label';
import Select from './Select';
import { IFormSelectProps } from './Select.types';

export default {
  title: 'Components/Form/Select',
  component: Select,
  args: {
    id: 'Select-example',
    values: [
      {
        displayValue: 'Apple',
        keyValue: 'a',
      },
      {
        displayValue: 'Orange',
        keyValue: 'o',
      },
      {
        displayValue: 'Pear',
        keyValue: 'p',
      },
      {
        displayValue: 'Peace',
        keyValue: 'p2',
      },
    ],
  },
} as Meta<IFormSelectProps>;

const Template: Story<IFormSelectProps> = (args) => {
  const [value, setValue] = useState('');
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

export const Basic: Story<IFormSelectProps> = Template.bind({});
Basic.args = {};

export const Disabled: Story<IFormSelectProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
