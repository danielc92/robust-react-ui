// Generated with util/create-component.js
import React from 'react';
import './Link.scss';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { ILinkProps } from './Link.types';

const Link = ({
  href,
  children,
  size = 'medium',
  display = 'inline',
  ariaDescribedBy,
  ariaLabel,
}: ILinkProps) => (
  <a
    href={href}
    aria-label={ariaLabel || null}
    aria-describedby={ariaDescribedBy || null}
    data-testid="Link"
    className={getClassNames({
      'dcui-link': true,
      [`dcui-link--${size}`]: true,
      'dcui-link--block': display === 'block',
    })}
  >
    {children}
  </a>
);

export default Link;
