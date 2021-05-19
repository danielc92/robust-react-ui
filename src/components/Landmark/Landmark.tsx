// Generated with util/create-component.js
import React, { ReactNode } from "react";

import { LandmarkProps } from "./Landmark.types";

import "./Landmark.scss";

const Landmark = ({ children }: LandmarkProps) => (
  <div data-testid="Landmark" className="dcui-landmark">
    {children}
  </div>
);

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => (
  <main data-testid="Main" className="dcui-landmark__main">
    {children}
  </main>
);

interface RegionProps {
  children: ReactNode;
  ariaLabelledBy?: string;
  ariaLabel?: string;
}
const Region = ({ children, ariaLabelledBy, ariaLabel }: RegionProps) => (
  <section
    data-testid="Region"
    className="dcui-landmark__region"
    aria-labelledby={
      ariaLabelledBy && ariaLabelledBy.length > 0 ? ariaLabelledBy : null
    }
    aria-label={ariaLabel && ariaLabel.length > 0 ? ariaLabel : null}
  >
    {children}
  </section>
);

interface ComplementaryProps {
  children: ReactNode;
  ariaLabelledBy?: string;
}
const Complementary = ({ children, ariaLabelledBy }: ComplementaryProps) => (
  <aside
    data-testid="Complementary"
    className="dcui-landmark__complementary"
    aria-labelledby={ariaLabelledBy || ""}
  >
    {children}
  </aside>
);

interface ContentInfoProps {
  children: ReactNode;
}

const ContentInfo = ({ children }: ContentInfoProps) => (
  <footer data-testid="ContentInfo" className="dcui-landmark__contentinfo">
    {children}
  </footer>
);

Landmark.Region = Region;
Landmark.Main = Main;
Landmark.Complementary = Complementary;
Landmark.ContentInfo = ContentInfo;

export default Landmark;
