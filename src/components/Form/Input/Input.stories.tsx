import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import FieldSet from 'robust-react-ui/components/Form/FieldSet';
import Label from 'robust-react-ui/components/Form/Label';
import { IFormInputProps } from './Input.types';
import Input from './Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    id: 'input-example',
    placeholder: 'Type some text',
    type: 'text',
  },
} as Meta<IFormInputProps>;

const Template: Story<IFormInputProps> = (args) => {
  const [value, setValue] = useState('');
  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
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

export const Color: Story<IFormInputProps> = Template.bind({});
Color.args = {
  type: 'color',
};

export const Text: Story<IFormInputProps> = Template.bind({});
Text.args = {};

export const TextError: Story<IFormInputProps> = Template.bind({});
TextError.args = {
  type: 'text',
  error: true,
  errorMessage: 'Something went wrong',
};

export const TextDisabled: Story<IFormInputProps> = Template.bind({});
TextDisabled.args = {
  disabled: true,
};

export const Password: Story<IFormInputProps> = Template.bind({});
Password.args = {
  type: 'password',
};
export const Date: Story<IFormInputProps> = Template.bind({});
Date.args = {
  type: 'date',
};
export const DateError: Story<IFormInputProps> = Template.bind({});
DateError.args = {
  type: 'date',
  error: true,
  errorMessage: 'Sorry, the date entered is invalid!',
};
export const DateDisabled: Story<IFormInputProps> = Template.bind({});
DateDisabled.args = {
  type: 'date',
  disabled: true,
};
