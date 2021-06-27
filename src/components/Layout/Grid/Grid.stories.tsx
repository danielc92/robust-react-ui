// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Grid from './Grid';
import Typography from '../../Typography';
import { IGridProps } from './Grid.types';
const { GridItem } = Grid;
export default {
  title: 'Components/Grid',
  component: Grid,
  args: {
    // Insert default args here
    gap: 'm',
  },
} as Meta<IGridProps>;

const Template: Story<IGridProps> = (args) => {
  return (
    <Grid {...args}>
      <GridItem config={{ rowStart: 1, colStart: 1, height: 1, width: 6 }}>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem
        variant="danger"
        config={{ rowStart: 2, colStart: 2, height: 2, width: 2 }}
      >
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem variant="success">
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem variant="danger">
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
    </Grid>
  );
};

const Template2: Story<IGridProps> = (args) => {
  return (
    <Grid {...args}>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem variant="success">
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem variant="danger">
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
      <GridItem>
        <Typography.Heading level={3}>heading</Typography.Heading>
        <Typography.Paragraph>lorem ipsum text</Typography.Paragraph>
      </GridItem>
    </Grid>
  );
};

export const Fixed: Story<IGridProps> = Template.bind({});
Fixed.args = {};
export const Fluid: Story<IGridProps> = Template2.bind({});
Fluid.args = {
  type: 'fluid',
};
