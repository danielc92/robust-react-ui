// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography from 'robust-react-ui/components/Typography';
import Column from 'robust-react-ui/components/Layout/Column';
import Row from 'robust-react-ui/components/Layout/Row';
import { ColumnProps } from './Column.types';

export default {
  title: 'Components/Layout/Rows & Columns',
  args: {},
} as Meta<ColumnProps>;

const Template: Story<ColumnProps> = (args) => (
  <Row>
    {new Array(7).fill(0).map((x, index) => (
      <Column {...args} key={index.toString()}>
        <Typography.Heading level={3}>Est veniam volupt</Typography.Heading>
        <Typography.Paragraph>
          Laboris non amet quis nulla cupidatat laboris. Quis ea culpa irure
          culpa incididunt fugiat est veniam voluptate nulla mollit. Voluptate
          aute et sint ut quis magna proident minim fugiat deserunt consect.
          Elit commodo nostrud aute duis minim id culpa sint voluptate ea
          laboris aliqua laborum commodo. Qui tempor est ullamco quis excepteur
          incididunt amet.
        </Typography.Paragraph>
      </Column>
    ))}
  </Row>
);

export const Half: Story<ColumnProps> = Template.bind({});
Half.args = { size: 'half' };

export const Quarter: Story<ColumnProps> = Template.bind({});
Quarter.args = { size: 'quarter' };

export const Third: Story<ColumnProps> = Template.bind({});
Third.args = { size: 'third' };
