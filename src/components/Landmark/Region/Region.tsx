// Generated with util/create-component.js
import React from 'react';

import { IRegionProps } from './Region.types';

const Region = ({ children, ariaLabelledBy, ariaLabel }: IRegionProps) => (
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

export default Region;
