// Generated with util/create-component.js
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Review from './Review';
import { IReviewProps } from './Review.types';

export default {
  title: 'Components/Review',
  component: Review,
  args: {
    // Insert default args here
  },
} as Meta<IReviewProps>;

const Template: Story<IReviewProps> = (args) => {
  const [rating, setRating] = useState<number>(0);
  const onCrossClickFunction = () => {
    setRating(0);
  };
  const onStarClickFunction = (rating: number) => {
    setRating(rating);
  };
  return (
    <Review
      currentValue={rating}
      onCrossClickFunction={onCrossClickFunction}
      onStarClickFunction={onStarClickFunction}
    />
  );
};

export const Basic: Story<IReviewProps> = Template.bind({});
Basic.args = {};
