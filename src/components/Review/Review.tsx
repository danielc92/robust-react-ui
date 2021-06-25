// Generated with util/create-component.js
import React from 'react';

import { ReviewProps } from './Review.types';

import './Review.scss';
import Star from '../Icon/Star';
import X from '../Icon/X';
import getClassNames from 'robust-react-ui/build/utils/getClassNames';

const Review = ({
  formId = 'star_rating',
  currentValue = 0,
  onCrossClickFunction,
  onStarClickFunction,
}: ReviewProps) => (
  <form id={formId} className="rrui-review">
    <input
      value="0"
      id="star0"
      readOnly
      checked
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
      onChange={onCrossClickFunction}
    />
    <label htmlFor="star0">
      <span className="rrui-review--vis-hidden">0 Stars</span>
      <svg viewBox="0 0 24 24">
        <X />
      </svg>
    </label>

    <input
      onClick={() => onStarClickFunction(1)}
      checked={currentValue >= 1}
      value="1"
      id="star1"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden "
    />
    <label htmlFor="star1">
      <span className="rrui-review--vis-hidden">1 Star</span>
      <svg
        viewBox="0 0 24 24"
        className={getClassNames({ 'rrui-review__checked': currentValue >= 1 })}
      >
        <Star />
      </svg>
    </label>

    <input
      onClick={() => onStarClickFunction(2)}
      checked={currentValue >= 2}
      value="2"
      id="star2"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star2">
      <span className="rrui-review--vis-hidden">2 Stars</span>
      <svg
        viewBox="0 0 24 24"
        className={getClassNames({ 'rrui-review__checked': currentValue >= 2 })}
      >
        <Star />
      </svg>
    </label>

    <input
      onClick={() => onStarClickFunction(3)}
      checked={currentValue >= 3}
      value="3"
      id="star3"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star3">
      <span className="rrui-review--vis-hidden">3 Stars</span>
      <svg
        viewBox="0 0 24 24"
        className={getClassNames({ 'rrui-review__checked': currentValue >= 3 })}
      >
        <Star />
      </svg>
    </label>

    <input
      onClick={() => onStarClickFunction(4)}
      checked={currentValue >= 4}
      value="4"
      id="star4"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star4">
      <span className="rrui-review--vis-hidden">4 Stars</span>
      <svg
        viewBox="0 0 24 24"
        className={getClassNames({ 'rrui-review__checked': currentValue >= 4 })}
      >
        <Star />
      </svg>
    </label>

    <input
      onClick={() => onStarClickFunction(5)}
      checked={currentValue >= 5}
      value="5"
      id="star5"
      type="radio"
      name="rating"
      className="rrui-review--vis-hidden"
    />
    <label htmlFor="star5">
      <span className="rrui-review--vis-hidden">5 Stars</span>
      <svg
        viewBox="0 0 24 24"
        className={getClassNames({ 'rrui-review__checked': currentValue >= 5 })}
      >
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
