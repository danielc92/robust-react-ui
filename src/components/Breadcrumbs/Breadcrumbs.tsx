// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IBreadcrumbsProps } from './Breadcrumbs.types';
import './Breadcrumbs.scss';

const Breadcrumbs = ({
  ariaLabel,
  data,
  size = 'medium',
}: IBreadcrumbsProps) => (
  <nav
    aria-label={ariaLabel || 'breadcrumbs'}
    data-testid="Breadcrumbs"
    className={getClassNames({
      'dcui-breadcrumbs': true,
      [`dcui-breadcrumbs--${size}`]: true,
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
