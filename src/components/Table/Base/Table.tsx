// Generated with util/create-component.js
import React from "react";
import { TableProps } from "./Table.types";
import "./Table.scss";
import classNames from "classnames";
import Row from "../Row";
import Cell from "../Cell";
import Head from "../Head";
import Header from "../Header";
import Body from "../Body";
import Foot from "../Foot";

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

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;

export default Table;
