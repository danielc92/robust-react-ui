// Generated with util/create-component.js
import React from "react";
import Complementary from "../Complementary/Complementary";
import ContentInfo from "../ContentInfo/ContentInfo";
import Main from "../Main/Main";
import Region from "../Region/Region";

import { LandmarkProps } from "./Landmark.types";

const Landmark = ({ children }: LandmarkProps) => (
  <div data-testid="Landmark" className="dcui-landmark">
    {children}
  </div>
);

Landmark.Region = Region;
Landmark.Main = Main;
Landmark.Complementary = Complementary;
Landmark.ContentInfo = ContentInfo;

export default Landmark;
