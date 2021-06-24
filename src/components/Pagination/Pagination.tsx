// Generated with util/create-component.js

import getClassNames from 'robust-react-ui/utils/getClassNames';
import React from 'react';
import { IPaginationProps } from './Pagination.types';
import './Pagination.scss';

const Pagination = ({ data, ariaLabel, rounded }: IPaginationProps) => {
  const defaultLabel = 'Pagination Navigation';

  return (
    <nav
      className="rrui-pagination"
      data-testid="Pagination"
      role="navigation"
      aria-label={ariaLabel || defaultLabel}
    >
      <ul className="rrui-pagination__wrapper" data-testid="PaginationWrapper">
        {data.map((x, i) => (
          <li key={`page-key${i.toString()}`}>
            <a
              data-testid="PaginationButton"
              className={getClassNames({
                'rrui-pagination__button': true,
                'rrui-pagination__button--current': x.current,
                'rrui-pagination__button--rounded': rounded,
              })}
              href={x.href}
              aria-label={
                x.current
                  ? `Page ${x.pageNumber}, Current page`
                  : `Page ${x.pageNumber}`
              }
              aria-current={x.current ? 'true' : null}
            >
              <span>{x.pageNumber}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
