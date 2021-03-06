export interface ICarouselSlideProps {
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

export interface ICarouselProps {
  /**
   * An accessible label.
   */
  ariaLabel: string;
  /**
   * An array of slides.
   */
  slides: Array<ICarouselSlideProps>;
  /**
   * Delay in between slide transitions (seconds).
   * @default 5
   */
  intervalSeconds?: number;

  /**
   * Toggles autoplay.
   * @default false
   */
  autoplay?: boolean;
}
