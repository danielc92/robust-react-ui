// Generated with util/create-component.js
import React, { useState } from 'react';
import { CarouselProps } from './Carousel.types';
import './Carousel.scss';
import getClassNames from '#/utils/getClassNames';

const Carousel = ({ ariaLabel, slides }: CarouselProps) => {
  const [activeSlide, setActive] = useState<number>(0);

  const navigateSlide = (dir: 'prev' | 'next') => {
    console.log(dir, 'moving');
    const max = slides.length - 1;
    if (dir === 'next') {
      const newIndex = activeSlide === max ? 0 : activeSlide + 1;
      setActive(newIndex);
    }

    if (dir === 'prev') {
      const newIndex = activeSlide === 0 ? max : activeSlide - 1;
      setActive(newIndex);
    }
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
      className="dcui-carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="dcui-carousel__inner">
        <div className="dcui-carousel__controls">
          <button
            type="button"
            className="dcui-carousel__button dcui-carousel__button--play"
            aria-label="Start automatic slide show"
          >
            START/PAUSE
          </button>

          <button
            onClick={() => navigateSlide('prev')}
            type="button"
            className="dcui-carousel__button dcui-carousel__button--prev"
            aria-controls="myCarousel-items"
            aria-label="Previous Slide"
          >
            PREV
          </button>

          <button
            onClick={() => navigateSlide('next')}
            type="button"
            className="dcui-carousel__button dcui-carousel__button--next"
            aria-controls="myCarousel-items"
            aria-label="Next Slide"
          >
            NEXT
          </button>
        </div>

        <div
          id="myCarousel-items"
          className="dcui-carousel__items"
          aria-live="polite"
        >
          {slides.map((s, i) => (
            <div
              className={getClassNames({
                'dcui-carousel__item': true,
                'dcui-carousel__item--active': activeSlide === i,
              })}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(i + 1).toString()} of ${slides.length}`}
            >
              <div className="dcui-carousel__image">
                <a href={s.href}>
                  <img src={s.imageSrc} alt={s.imageAlt} />
                </a>
              </div>

              <div className="dcui-carousel__caption">
                <h3>
                  <a href={s.href} id={`carousel-label-${i}`}>
                    {s.captionHeading}
                  </a>
                </h3>

                <div className="hidden-xs hidden-sm">
                  <p>
                    <span className="dcui-carousel__contrast">
                      {s.captionText}
                    </span>
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
