// Generated with util/create-component.js
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Alert from './Alert';
import { IAlertProps } from './Alert.types';
import Typography from '../Typography';
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
      <Typography.Paragraph>
        Voluptate magna et cillum culpa sit minim non ad duis ipsum ea est anim.
        Ea adipisicing do Lorem mollit ea ea aliquip ipsum aute aliqua esse
        tempor pariatur labore. Tempor voluptate ad id qui sint in commodo
        ullamco irure.Occaecat ipsum aute laborum exercitation tempor.
      </Typography.Paragraph>
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
