// Generated with util/create-component.js
import React from 'react';
import { HeadingLevel, HeadingProps } from './Heading.types';
import './Heading.scss';
import getClassNames from 'utils/getClassNames';

const getHeaderClass = (level: HeadingLevel | null, jumbo: boolean) => {
  const levelCalc = !level ? 1 : level;
  return getClassNames({
    'dcui-header': true,
    [`dcui-header__${levelCalc}`]: true,
    [`dcui-header__${levelCalc}--jumbo`]: jumbo,
  });
};

const Heading = ({ children, level, jumbo, id }: HeadingProps) => {
  if (!level || level === 1)
    return (
      <h1
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2
        data-testid="Heading"
        className={getHeaderClass(level, jumbo)}
        id={id || null}
      >
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h5>
    );
  if (level === 6)
    return (
      <h6
        data-testid="Heading"
        id={id || null}
        className={getHeaderClass(level, jumbo)}
      >
        {children}
      </h6>
    );
};

export default Heading;
