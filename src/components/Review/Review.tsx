// Generated with util/create-component.js
import React from 'react';

import { ReviewProps } from './Review.types';

import './Review.scss';
import Star from '../Icon/Star';
import Crosshair from '../Icon/Crosshair';
import X from '../Icon/X';
import Icon from '../Icon';

const Review = ({ formId = 'star_rating' }: ReviewProps) => (
  <form id={formId}>
    <input
      value="0"
      id="star0"
      checked
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star0">
      <span className="rrui-review--vis-hidden">0 Stars</span>
      <svg viewBox="0 0 24 24">
        <X />
      </svg>
    </label>

    <input
      value="1"
      id="star1"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star1">
      <span className="rrui-review--vis-hidden">1 Star</span>
      <svg viewBox="0 0 24 24">
        <Star />
      </svg>
    </label>

    <input
      value="2"
      id="star2"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star2">
      <span className="rrui-review--vis-hidden">2 Stars</span>
      <svg viewBox="0 0 24 24">
        <Star />
      </svg>
    </label>

    <input
      value="3"
      id="star3"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star3">
      <span className="rrui-review--vis-hidden">3 Stars</span>
      <svg viewBox="0 0 24 24">
        <Star />
      </svg>
    </label>

    <input
      value="4"
      id="star4"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star4">
      <span className="rrui-review--vis-hidden">4 Stars</span>
      <svg viewBox="0 0 24 24">
        <Star />
      </svg>
    </label>

    <input
      value="5"
      id="star5"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star5">
      <span className="rrui-review--vis-hidden">5 Stars</span>
      <svg viewBox="0 0 24 24">
        <Star />
      </svg>
    </label>

    <button
      onClick={() => console.log('WHOA')}
      style={{ background: 'blue' }}
      type="submit"
      className="btn-small rrui-review--vis-hidden focusable"
    >
      Submit rating
    </button>

    <output></output>
  </form>
);

export default Review;
