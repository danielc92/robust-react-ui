// Generated with util/create-component.js
import React, { useEffect, useState } from 'react';
import { CarouselProps } from './Carousel.types';
import './Carousel.scss';
import getClassNames from '#/utils/getClassNames';

const Carousel = ({ ariaLabel, slides }: CarouselProps) => {
  const [activeSlide, setActive] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<any>(null);
  const navigateSlide = (dir: 'prev' | 'next') => {
    console.log(dir, 'moving');
    const max = slides.length - 1;
    if (dir === 'next') {
      const newIndex = activeSlide === max ? 0 : activeSlide + 1;
      console.log(newIndex, 'new');
      setActive(newIndex);
    }

    if (dir === 'prev') {
      const newIndex = activeSlide === 0 ? max : activeSlide - 1;
      setActive(newIndex);
    }
  };
  const play = () => {
    console.log('playing.');
    const interval = setInterval(() => {
      navigateSlide('next');
    }, 2500);
    console.log(interval, 'ASKDJASIOLFJAISJF');
    setIntervalId(interval);
  };
  const pause = () => {
    console.log('pausing');
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    // play();
  }, []);

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dcui-carousel__icon"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </button>

          <button
            onClick={() => navigateSlide('prev')}
            type="button"
            className="dcui-carousel__button dcui-carousel__button--prev"
            aria-controls="myCarousel-items"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dcui-carousel__icon"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 8 12 12 16" />
              <line x1="16" y1="12" x2="8" y2="12" />
            </svg>
          </button>

          <button
            onClick={() => navigateSlide('next')}
            type="button"
            className="dcui-carousel__button dcui-carousel__button--next"
            aria-controls="myCarousel-items"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dcui-carousel__icon"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>

        <div
          id="myCarousel-items"
          className="dcui-carousel__items"
          aria-live="polite"
        >
          {slides.map((s, i) => (
            <div
              key={i.toString()}
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
