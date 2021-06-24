// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IImageProps } from './Image.types';
import './Image.scss';

const Image = ({
  height,
  width,
  alt,
  scaling,
  style,
  circle,
  bordered,
  blurred,
  src,
}: IImageProps) => (
  <img
    style={style || null}
    alt={alt}
    width={width || null}
    height={height || null}
    data-testid="Image"
    src={src}
    className={getClassNames({
      'rrui-image': true,
      'rrui-image--responsive': scaling === 'unrestricted',
      'rrui-image--responsive-restrict-width': scaling === 'restricted-width',
      'rrui-image--circle': circle,
      'rrui-image--bordered': bordered,
      'rrui-image--blurred': blurred,
    })}
  />
);

export default Image;
