// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Image from './Image';
import src from './assets/xavi-cabrera-kn-UmDZQDjM-unsplash.jpg';
import { IImageProps } from './Image.types';

export default {
  title: 'Components/Image',
  component: Image,
  args: {
    alt: 'Lego pieces on the floor.',
    src,
    width: 800,
    height: 475,
  },
} as Meta<IImageProps>;

const Template: Story<IImageProps> = (args) => <Image {...args} />;

export const Basic: Story<IImageProps> = Template.bind({});

export const ScalingUnrestricted: Story<IImageProps> = Template.bind({});
ScalingUnrestricted.args = {
  scaling: 'unrestricted',
};
export const ScalingRestricted: Story<IImageProps> = Template.bind({});
ScalingRestricted.args = {
  scaling: 'restricted-width',
};
export const Bordered: Story<IImageProps> = Template.bind({});
Bordered.args = {
  bordered: true,
  scaling: 'restricted-width',
};
export const Blurred: Story<IImageProps> = Template.bind({});
Blurred.args = {
  blurred: true,
  scaling: 'restricted-width',
};
export const Circular: Story<IImageProps> = Template.bind({});
Circular.args = {
  circle: true,
  width: 300,
  height: 300,
};
