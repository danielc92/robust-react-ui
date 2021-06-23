// Generated with util/create-component.js
import React from 'react';
import Main from 'robust-react-ui/components/Landmark/Main';
import Region from 'robust-react-ui/components/Landmark/Region';
import Complementary from 'robust-react-ui/components/Landmark/Complementary';
import ContentInfo from 'robust-react-ui/components/Landmark/ContentInfo';

import { ILandmarkProps } from './Landmark.types';

const Landmark = ({ children }: ILandmarkProps) => (
  <div data-testid="Landmark" className="dcui-landmark">
    {children}
  </div>
);

Landmark.Region = Region;
Landmark.Main = Main;
Landmark.Complementary = Complementary;
Landmark.ContentInfo = ContentInfo;

export default Landmark;
