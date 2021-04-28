// Generated with util/create-component.js
import React from "react";

import {
  TableBodyProps,
  TableCellProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./Table.types";

import "./Table.scss";
import classNames from "classnames";

const Table = ({ children, striped }: TableProps) => (
  <table
    data-testid="Table"
    className={classNames({
      "dcui-table": true,
      "dcui-table--striped": striped,
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

const Header = ({ children }: TableHeaderProps) => (
  <th className="dcui-table__header">{children}</th>
);

const Row = ({ children }: TableRowProps) => (
  <tr className="dcui-table__row">{children}</tr>
);

const Cell = ({ children }: TableCellProps) => (
  <td className="dcui-table__cell">{children}</td>
);

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.Head = Head;
Table.Body = Body;

export default Table;
