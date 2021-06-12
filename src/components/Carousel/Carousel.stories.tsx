// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";
import Container from '../Layout/Container'
export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    // Insert default args here
    ariaLabel: "Sample carousel",
    slides: [
      {
        imageSrc:"https://via.placeholder.com/600x300/bf9c0d/ffffff",
        imageAlt: "alt text for an image",
        href: "https://github.com",
        captionHeading: "Heading for image 1",
        captionText: "Lorem dolore dolor fugiat sint adipisicing officia adipisicing elit.",
      },
      {
        imageSrc:"https://via.placeholder.com/800x300/135691/ffffff",
        imageAlt: "alt text for an image",
        href: "https://github.com",
        captionHeading: "Heading for image 1",
        captionText: "Lorem dolore dolor fugiat sint adipisicing officia adipisicing elit.",
      },
      {
        imageSrc:"https://via.placeholder.com/800x300/751754/ffffff",
        imageAlt: "alt text for an image",
        href: "https://github.com",
        captionHeading: "Heading for image 1",
        captionText: "Lorem dolore dolor fugiat sint adipisicing officia adipisicing elit.",
      }
    ]
  },
} as Meta<CarouselProps>;

const Template: Story<CarouselProps> = (args) => {
  return (<Container>
    <Carousel {...args} />
  </Container>)
};

export const Basic: Story<CarouselProps> = Template.bind({});
Basic.args = {
 
}
