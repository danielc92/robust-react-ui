// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IHeadingProps } from './Heading.types';
import './Heading.scss';

const getHeaderClass = (level: 1 | 2 | 3 | 4 | 5 | 6, jumbo: boolean) =>
  getClassNames({
    'rrui-header': true,
    [`rrui-header__${level}`]: true,
    [`rrui-header__${level}--jumbo`]: jumbo,
  });

const Heading = ({ children, level = 1, jumbo = false, id }: IHeadingProps) => {
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
  return (
    <h1
      data-testid="Heading"
      id={id || null}
      className={getHeaderClass(level, jumbo)}
    >
      {children}
    </h1>
  );
};

export default Heading;
