// Generated with util/create-component.js
import React, { useState } from 'react';
import { CarouselProps } from './Carousel.types';
import './Carousel.scss';
import getClassNames from '#/utils/getClassNames';

const Carousel = ({ ariaLabel, slides }: CarouselProps) => {
  const [activeSlide, setActive] = useState<number>(0);

  const navigateSlide = (dir: 'prev' | 'next') => {
    console.log(dir, 'moving');
  };
  const play = () => {
    console.log('playing.');
  };
  const pause = () => {
    console.log('pausing');
  };

  return (
    <section
      id="myCarousel"
      className="carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="carousel-inner">
        <div className="controls">
          <button
            type="button"
            className="rotation play"
            aria-label="Start automatic slide show"
          >
            START/PAUSE
          </button>

          <button
            type="button"
            className="previous"
            aria-controls="myCarousel-items"
            aria-label="Previous Slide"
          >
            PREV
          </button>

          <button
            type="button"
            className="next"
            aria-controls="myCarousel-items"
            aria-label="Next Slide"
          >
            NEXT
          </button>
        </div>

        <div
          id="myCarousel-items"
          className="carousel-items"
          aria-live="polite"
        >
          {slides.map((s, i) => (
            <div
              className={getClassNames({
                'carousel-item': true,
              })}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(i + 1).toString()} of ${slides.length}`}
            >
              <div className="carousel-image">
                <a href={s.href}>
                  <img src={s.imageSrc} alt={s.imageAlt} />
                </a>
              </div>

              <div className="carousel-caption">
                <h3>
                  <a href={s.href} id={`carousel-label-${i}`}>
                    {s.captionHeading}
                  </a>
                </h3>

                <div className="hidden-xs hidden-sm">
                  <p>
                    <span className="contrast">{s.captionText}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
