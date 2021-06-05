// Generated with util/create-component.js
import React from "react";

import { BreadcrumbsProps } from "./Breadcrumbs.types";

import "./Breadcrumbs.scss";
import getClassNames from "utils/getClassNames";

const Breadcrumbs = ({ ariaLabel, data, size }: BreadcrumbsProps) => {
  const _ariaLabel = ariaLabel || "breadcrumbs";
  return (
    <nav
      aria-label={_ariaLabel}
      data-testid="Breadcrumbs"
      className={getClassNames({
        "dcui-breadcrumbs": true,
        "dcui-breadcrumbs--small": size === "small",
        "dcui-breadcrumbs--medium": size === "medium" || !size,
        "dcui-breadcrumbs--large": size === "large",
      })}
    >
      <ol className="dcui-breadcrumbs__list">
        {data.map((b, i) => (
          <li key={`breadcrumb_${i}`} className="dcui-breadcrumbs__item">
            <a
              href={b.linkHref || null}
              aria-current={b.isCurrent ? "page" : null}
            >
              {b.linkText}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
