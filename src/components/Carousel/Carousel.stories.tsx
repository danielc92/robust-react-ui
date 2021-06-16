// Generated with util/create-component.js
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Carousel from './Carousel';
import { CarouselProps } from './Carousel.types';
import Container from '../Layout/Container';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    // Insert default args here
    ariaLabel: 'Sample carousel',
    slides: [
      {
        imageSrc: 'https://via.placeholder.com/1200x500/bf9c0d/ffffff',
        imageAlt: 'alt text for an image',
        href: 'https://github.com',
        captionHeading:
          'Do dolored. Alolore quis temris e adipisicing deserunt.',
        captionText:
          'Officia consectetur anim quis eu sit. Pariatur quis ea cupidatat ea irure ad laboris in esse minim excepteur. Dolor aliqua voluptate nisi ex ut tempor officia. Culpa ipsum voluptate ut amet elit cupidatat cillum aliqua fugiat nostrud exercitation pariatur deserunt. Id dolor veniam aliqua voluptate eiusmod pariatur excepteur dolor fugiat do et in.',
      },
      {
        imageSrc: 'https://via.placeholder.com/1200x500/135691/ffffff',
        imageAlt: 'alt text for an image',
        href: 'https://github.com',
        captionHeading: 'Esse non mollit laborum amet sint veniam.',
        captionText:
          'Magna nulla ea nulla ea commodo minim Lorem eu nisi laborum est nisi esse. Fugiat velit anim ea fugiat esse tempor esse. Lorem non sit ad enim laboris duis ad eu dolor ex velit nulla. Excepteur sint culpa irure ipsum ea amet ipsum. Sit reprehenderit exercitation Lorem consequat cupidatat mollit ullamco in ullamco exercitation veniam. Irure irure sint magna deserunt aliqua. Tempor consequat deserunt deserunt culpa incididunt et cillum sit deserunt.',
      },
      {
        imageSrc: 'https://via.placeholder.com/1200x500/751754/ffffff',
        imageAlt: 'alt text for an image',
        href: 'https://github.com',
        captionHeading: 'Ea elit labore laboris ex deserunt.',
        captionText:
          'Deserunt Lorem laboris mollit proident pariatur. Velit duis velit ut mollit laborum laborum eu cupidatat veniam deserunt culpa. Irure anim dolor et voluptate quis magna aliqua tempor nostrud labore consequat do. Quis nisi do enim mollit labore sint. Ullamco cupidatat commodo magna esse officia adipisicing aliquip ea ad magna magna excepteur.',
      },
    ],
  },
} as Meta<CarouselProps>;

const Template: Story<CarouselProps> = (args) => (
  <Container>
    <Carousel {...args} />
  </Container>
);

export const Default: Story<CarouselProps> = Template.bind({});
Default.args = {};
export const Autoplay: Story<CarouselProps> = Template.bind({});
Autoplay.args = {
  autoplay: true,
};
export const WithCustomTiming: Story<CarouselProps> = Template.bind({});
WithCustomTiming.args = {
  autoplay: true,
  intervalSeconds: 3,
};
