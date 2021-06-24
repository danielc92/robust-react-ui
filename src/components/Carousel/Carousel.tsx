// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { ICarouselProps } from './Carousel.types';
import './Carousel.scss';
import Typography from 'robust-react-ui/components/Typography';

const Carousel = ({
  ariaLabel,
  slides,
  intervalSeconds = 5,
  autoplay = false,
}: ICarouselProps) => {
  const [activeSlide, setActive] = useState<number>(0);

  const ref = useRef<any>();

  const navigateSlide = (dir: 'prev' | 'next') => {
    const max = slides.length - 1;
    if (dir === 'next') {
      setActive((a) => {
        if (a === max) {
          return 0;
        }
        return a + 1;
      });
    }

    if (dir === 'prev') {
      setActive((a) => {
        if (a === 0) {
          return max;
        }
        return a - 1;
      });
    }
  };
  const [playing, setPlaying] = useState(autoplay);
  const toggle = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    setPlaying((p) => !p);
  const [itemsFocused, setItemsFocused] = useState<boolean>(false);
  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        navigateSlide('next');
      }, intervalSeconds * 1000);
      ref.current = interval;
    } else {
      clearInterval(ref.current);
    }

    return () => clearInterval(ref.current);
  }, [playing]);

  const pause = () => setPlaying(false);

  const handleAnchorKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    const { keyCode, shiftKey } = event;
    if (keyCode === 9) {
      // event.preventDefault();
      if (shiftKey) {
        setItemsFocused(true);
      }
    }
  };
  const [polite, setPolite] = useState<boolean>(false);
  const ariaLive = polite ? 'polite' : 'off';
  return (
    <section
      data-testid="Carousel"
      onMouseEnter={() => setPolite(true)}
      onFocus={() => setPolite(true)}
      onBlur={() => setPolite(false)}
      onMouseLeave={() => setPolite(false)}
      id="myCarousel"
      className="rrui-carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="rrui-carousel__inner">
        <div className="rrui-carousel__controls">
          <button
            // onFocus={pause}
            onClick={toggle}
            type="button"
            className="rrui-carousel__button rrui-carousel__button--play"
            aria-label="Start automatic slide show"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rrui-carousel__icon"
            >
              {playing ? (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="10" y1="15" x2="10" y2="9" />
                  <line x1="14" y1="15" x2="14" y2="9" />
                </>
              ) : (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </>
              )}
            </svg>
          </button>

          <div>
            <button
              onFocus={() => console.log('onfocus')}
              onFocusCapture={() => console.log('onFocusCapture')}
              onBeforeInputCapture={() => console.log('onBeforeInputCapture')}
              onClick={() => navigateSlide('prev')}
              type="button"
              className="rrui-carousel__button rrui-carousel__button--prev"
              aria-controls="myCarousel-items"
              aria-label="Previous Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rrui-carousel__icon"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 8 8 12 12 16" />
                <line x1="16" y1="12" x2="8" y2="12" />
              </svg>
            </button>

            <button
              onFocus={() => {
                pause();
                setItemsFocused(false);
              }}
              onBlur={() => setItemsFocused(true)}
              onClick={() => navigateSlide('next')}
              type="button"
              className="rrui-carousel__button rrui-carousel__button--next"
              aria-controls="myCarousel-items"
              aria-label="Next Slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rrui-carousel__icon"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 16 16 12 12 8" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="myCarousel-items"
          className={getClassNames({
            'rrui-carousel__items': true,
            'rrui-carousel__items--focused': itemsFocused,
          })}
          aria-live={ariaLive}
        >
          {slides.map((s, i) => (
            <div
              key={i.toString()}
              className={getClassNames({
                'rrui-carousel__item': true,
                'rrui-carousel__item--active': activeSlide === i,
              })}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(i + 1).toString()} of ${slides.length}`}
            >
              <div className="rrui-carousel__image">
                <a href={s.href}>
                  <img src={s.imageSrc} alt={s.imageAlt} />
                </a>
              </div>

              <div className="rrui-carousel__caption">
                <Typography.Heading level={3}>
                  <a
                    onKeyDown={handleAnchorKeyDown}
                    onFocus={() => setItemsFocused(false)}
                    href={s.href}
                    id={`carousel-label-${i}`}
                  >
                    {s.captionHeading}
                  </a>
                </Typography.Heading>
                <Typography.Paragraph>{s.captionText}</Typography.Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
