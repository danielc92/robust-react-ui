// Generated with util/create-component.js
import React from "react";

import { ReviewProps } from "./Review.types";

import "./Review.scss";
import Star from "../Icon/Star";

const Review = ({ foo }: ReviewProps) => (
<form action="#" id="star_rating">
 <input value="0" id="star0" checked
	type="radio" name="rating" className="visuallyhidden"/>
	<label htmlFor="star0">
		<span className="visuallyhidden">0 Stars</span>
		<svg viewBox="0 0 512 512">
			<g stroke-width="70" stroke-linecap="square">
				<path d="M91.5,442.5 L409.366489,124.633512"></path>
				<path d="M90.9861965,124.986197 L409.184248,443.184248"></path>
			</g>
		</svg>
	</label>

	<input value="1" id="star1"
		type="radio" name="rating" className="visuallyhidden"/>
	<label htmlFor="star1">
		<span className="visuallyhidden">1 Star</span>
		<svg viewBox=" 0 0 24 24">
            <Star/>
        </svg>
	</label>

	<input value="2" id="star2"
		type="radio" name="rating" className="visuallyhidden"/>
	<label htmlFor="star2">
		<span className="visuallyhidden">2 Stars</span>
		<svg viewBox=" 0 0 24 24">
            <Star/>
        </svg>
	</label>

	<input value="3" id="star3"
		type="radio" name="rating" className="visuallyhidden"/>
	<label htmlFor="star3">
		<span className="visuallyhidden">3 Stars</span>
		<svg viewBox=" 0 0 24 24">
            <Star/>
        </svg>
	</label>

	<input value="4" id="star4"
		type="radio" name="rating" className="visuallyhidden"/>
	<label htmlFor="star4">
		<span className="visuallyhidden">4 Stars</span>
		<svg viewBox=" 0 0 24 24">
            <Star/>
        </svg>
	</label>

	<input value="5" id="star5"
		type="radio" name="rating" className="visuallyhidden">
	<label htmlFor="star5">
		<span className="visuallyhidden">5 Stars</span>
        <svg viewBox=" 0 0 24 24">
            <Star/>
        </svg>
	</label>

	<button type="submit" className="btn-small visuallyhidden focusable">Submit rating</button>

	<output></output>
</form>
    );

export default Review;

