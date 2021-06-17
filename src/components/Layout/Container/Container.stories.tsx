// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography from 'robust-react-ui/components/Typography';
import Container from 'robust-react-ui/components/Layout/Container';
import { ContainerProps } from './Container.types';

export default {
  title: 'Components/Layout/Container',
  args: {},
} as Meta<ContainerProps>;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Typography.Heading level={1}>
      Ea in incididunt cillum ut laborum magna minim adipisicing non dolore
      ipsum eu amet Lorem.
    </Typography.Heading>
    <Typography.Heading level={2}>
      Culpa ut ullamco minim voluptate est mollit elit.
    </Typography.Heading>
    <Typography.Paragraph>
      Tempor elit officia cillum sunt veniam id qui. Anim sint irure ea esse.
      Veniam magna duis irure fugiat sunt. Fugiat aute exercitation commodo
      consequat anim aute. Ut ullamco et cupidatat nulla irure ex. Reprehenderit
      aliquip adipisicing non aliqua quis.
    </Typography.Paragraph>

    <Typography.Heading level={2}>
      Do enim irure tempor tempor anim et nostrud pariatur amet.
    </Typography.Heading>
    <Typography.Paragraph>
      Cillum ea officia laborum ullamco irure non aliqua aliquip occaecat
      reprehenderit duis labore voluptate laboris. Veniam consectetur
      exercitation et tempor incididunt id aliqua id. Id consectetur irure duis
      et reprehenderit labore sunt labore officia est mollit sint reprehenderit
      aliqua.
    </Typography.Paragraph>
    <Typography.Heading level={2}>
      Non enim Lorem Lorem laboris irure occaecat deserunt sit laborum
      exercitation aliquip aute.
    </Typography.Heading>

    <Typography.Paragraph>
      Reprehenderit dolore tempor occaecat dolore aliqua duis dolore non
      deserunt enim fugiat amet consequat. Occaecat minim consectetur proident
      irure deserunt velit incididunt incididunt commodo. In reprehenderit quis
      laboris voluptate occaecat incididunt labore Lorem veniam dolore non
      cupidatat non. Lorem pariatur id incididunt velit. Ad officia aliqua ipsum
      magna minim ea fugiat do deserunt eiusmod labore consequat enim excepteur.
      Irure sit est esse deserunt in consequat reprehenderit elit et cillum
      irure.
    </Typography.Paragraph>
  </Container>
);

export const Small: Story<ContainerProps> = Template.bind({});
Small.args = { size: 'small' };

export const Medium: Story<ContainerProps> = Template.bind({});
Medium.args = { size: 'medium' };

export const Large: Story<ContainerProps> = Template.bind({});
Large.args = { size: 'large' };
