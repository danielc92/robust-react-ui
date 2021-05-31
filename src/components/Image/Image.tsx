// Generated with util/create-component.js
import React from "react";

import { ImageProps } from "./Image.types";

import "./Image.scss";
import classNames from "classnames";

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
}: ImageProps) => (
  <img
    style={style || null}
    alt={alt}
    width={width || null}
    height={height || null}
    data-testid="Image"
    src={src}
    className={classNames({
      "dcui-image": true,
      "dcui-image--responsive": scaling === "unrestricted",
      "dcui-image--responsive-restrict-width": scaling === "restricted-width",
      "dcui-image--circle": circle,
      "dcui-image--bordered": bordered,
      "dcui-image--blurred": blurred,
    })}
  />
);

export default Image;
