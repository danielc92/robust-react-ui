// Generated with util/create-component.js

import classNames from "classnames";

import React from "react";

// import { PaginationProps } from "./Pagination.types";

import "./Pagination.scss";

interface PaginationProps {
  ariaLabel?: string;

  data: {
    current: boolean;

    href: string;

    pageNumber: number | string;
  }[];
}

const Pagination = ({ data, ariaLabel }: PaginationProps) => {
  const defaultLabel = "Pagination Navigation";

  return (
    <nav
      className="dcui-pagination"
      data-testid="Pagination"
      role="navigation"
      aria-label={ariaLabel || defaultLabel}
    >
      <ul className="dcui-pagination__wrapper">
        {data.map((x, i) => (
          <li key={"page-key" + i.toString()}>
            <a
              className={classNames({
                "dcui-pagination__button": true,
                "dcui-pagination__button--current": x.current,
              })}
              href={x.href}
              aria-label={
                x.current
                  ? `Page ${x.pageNumber}, Current page`
                  : `Page ${x.pageNumber}`
              }
              aria-current={x.current ? "true" : null}
            >
              {x.pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
