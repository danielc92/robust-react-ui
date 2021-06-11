import React from 'react';
// Generated with util/create-component.js
export interface ImageProps {
  /**
   * A fixed height for the component. Improves layout performance.
   */
  height?: number;
  /**
   * A fixed width for the component. Improves layout performance.
   */
  width?: number;
  /**
   * An accessible label for the component.
   */
  alt: string;
  /**
   * Control how scaling behaviour of the Image.
   */
  scaling?: 'unrestricted' | 'restricted-width';
  /**
   * Style overrides.
   */
  style?: React.CSSProperties;
  /**
   * Renders Image as a circle.
   */
  circle?: boolean;
  /**
   * Renders Image with a border.
   */
  bordered?: boolean;
  /**
   * Adds a blur filter effect to the image.
   */
  blurred?: boolean;
  /**
   * The source url of the image.
   */
  src: string;
}
