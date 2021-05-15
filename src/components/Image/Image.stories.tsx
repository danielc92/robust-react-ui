// Generated with util/create-component.js
import React from "react";
import Image from "./Image";
import legoSrc from "./assets/xavi-cabrera-kn-UmDZQDjM-unsplash.jpg";
export default {
  title: "Image",
};

export const Basic = () => (
  <Image src={legoSrc} alt="Lego on the floor" width={800} height={460} />
);

export const ScalingUnrestricted = () => (
  <Image
    src={legoSrc}
    alt="Lego on the floor"
    width={800}
    height={460}
    scaling="unrestricted"
  />
);
export const ScalingRestricted = () => (
  <Image
    src={legoSrc}
    alt="Lego on the floor"
    width={800}
    height={460}
    scaling="restricted-width"
  />
);

export const WithBorder = () => (
  <Image
    src={legoSrc}
    alt="Lego on the floor"
    width={800}
    height={460}
    bordered
  />
);

export const Circle = () => (
  <Image
    src={legoSrc}
    alt="Lego on the floor"
    width={300}
    height={300}
    circle
  />
);
