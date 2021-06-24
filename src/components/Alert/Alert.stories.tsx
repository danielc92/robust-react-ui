// Generated with util/create-component.js
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Alert from './Alert';
import { IAlertProps } from './Alert.types';

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {},
} as Meta<IAlertProps>;

const Template: Story<IAlertProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(true);
  const onCloseActionFunction = () => {
    setVisible(false);
  };
  return (
    <Alert
      {...args}
      onCloseActionFunction={onCloseActionFunction}
      visible={visible}
    >
      <p className="rrui-para rrui-para--medium">
        Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad
        eiusmod proident adipisicing.
      </p>
    </Alert>
  );
};

export const Primary: Story<IAlertProps> = Template.bind({});
Primary.args = {};
export const Danger: Story<IAlertProps> = Template.bind({});
Danger.args = {
  variant: 'danger',
};
export const Success: Story<IAlertProps> = Template.bind({});
Success.args = {
  variant: 'success',
};
