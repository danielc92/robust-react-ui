// Generated with util/create-component.js
import React from "react";
import Landmark from "./Landmark";

export default {
  title: "Landmark",
};

export const Main = () => (
  <Landmark.Main>
    <h1>A Story about animals</h1>
  </Landmark.Main>
);

export const Region = () => (
  <Landmark.Region ariaLabelledBy="animals">
    <h1 id="animals">A Story about animals</h1>
  </Landmark.Region>
);

export const Complementary = () => (
  <Landmark.Complementary>
    <h1>Renders an aside tag with children</h1>
  </Landmark.Complementary>
);

export const ContentInfo = () => (
  <Landmark.ContentInfo>
    <h1>Renders a footer tag with children</h1>
  </Landmark.ContentInfo>
);
