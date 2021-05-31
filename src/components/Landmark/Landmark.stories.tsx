// Generated with util/create-component.js

import React from "react";
import Landmark from "./Landmark";

export default {
  title: "Components/Landmark",
};

export const Main = () => (
  <Landmark.Main>
    <h2 className="dcui-header">This is a Main landmark</h2>

    <p className="dcui-para">
      This landmark will render the <strong>main</strong> tag at the root level.
    </p>
  </Landmark.Main>
);

export const Region = () => (
  <Landmark.Region ariaLabelledBy="region-id">
    <h2 className="dcui-header" id="region-id">
      This is a Region landmark
    </h2>

    <p className="dcui-para">
      This landmark will render the <strong>section</strong> tag at the root
      level.
    </p>
  </Landmark.Region>
);

export const Complementary = () => (
  <Landmark.Complementary>
    <h2 className="dcui-header">This is a Complementary landmark</h2>

    <p className="dcui-para">
      This landmark will render the <strong>aside</strong> tag at the root
      level.
    </p>
  </Landmark.Complementary>
);

export const ContentInfo = () => (
  <Landmark.ContentInfo>
    <h1 className="dcui-header">This is a ContentInfo landmark</h1>

    <p className="dcui-para">
      This landmark will render the <strong>footer</strong> tag at the root
      level.
    </p>
  </Landmark.ContentInfo>
);
