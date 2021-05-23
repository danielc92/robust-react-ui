// Generated with util/create-component.js
import React from "react";

import {
  TableBodyProps,
  TableCellProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  TableFootProps,
} from "./Table.types";

import "./Table.scss";
import classNames from "classnames";

const Table = ({
  children,
  striped,
  centerCellContent,
  id,
  ariaDescribedBy,
  ariaLabel,
}: TableProps) => (
  <table
    id={id || null}
    aria-describedby={ariaDescribedBy || null}
    aria-label={ariaLabel || null}
    data-testid="Table"
    className={classNames({
      "dcui-table": true,
      "dcui-table--striped": striped,
      "dcui-table--center-cells": centerCellContent,
    })}
  >
    {children}
  </table>
);

const Head = ({ children }: TableHeadProps) => (
  <thead className="dcui-table__head">{children}</thead>
);

const Body = ({ children }: TableBodyProps) => (
  <tbody className="dcui-table__body">{children}</tbody>
);

const Header = ({ children, colSpan, rowSpan, scope }: TableHeaderProps) => (
  <th
    className="dcui-table__header"
    scope={scope || "col"}
    rowSpan={rowSpan || null}
    colSpan={colSpan || null}
  >
    {children}
  </th>
);

const Row = ({ children }: TableRowProps) => (
  <tr className="dcui-table__row">{children}</tr>
);

const Cell = ({ children }: TableCellProps) => (
  <td className="dcui-table__cell">{children}</td>
);

const Foot = ({ children }: TableFootProps) => (
  <tfoot className="dcui-table__foot">{children}</tfoot>
);

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;

export default Table;
