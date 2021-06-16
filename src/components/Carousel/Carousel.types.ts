// Generated with util/create-component.js
export interface CarouselProps {
  /**
   * An accessible label.
   */
  ariaLabel: string;
  /**
   * An array of slides
   */
  slides: Array<CarouselSlide>;
  /**
   * @default 5
   */
  intervalSeconds?: number;

  /**
   * @default false
   */
  autoplay?: boolean;
}

export interface CarouselSlide {
  /**
   * Source url of image.
   */
  imageSrc: string;
  /**
   * An accessible label.
   */
  imageAlt: string;
  /**
   * Actionable link, used for background image, and captionHeading.
   */
  href: string;
  /**
   * Heading for the slide.
   */
  captionHeading: string;
  /**
   * Description text for the slide.
   */
  captionText: string;
}
