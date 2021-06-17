// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ ariaLabel, data, size }: BreadcrumbsProps) => (
  <nav
    aria-label={ariaLabel || 'breadcrumbs'}
    data-testid="Breadcrumbs"
    className={getClassNames({
      'dcui-breadcrumbs': true,
      'dcui-breadcrumbs--small': size === 'small',
      'dcui-breadcrumbs--medium': size === 'medium' || !size,
      'dcui-breadcrumbs--large': size === 'large',
    })}
  >
    <ol className="dcui-breadcrumbs__list">
      {data.map((b) => (
        <li key={`breadcrumb_${b.linkText}`} className="dcui-breadcrumbs__item">
          <a
            href={b.linkHref || null}
            aria-current={b.isCurrent ? 'page' : null}
          >
            {b.linkText}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
