// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { TableProps } from './Table.types';
import './Table.scss';
import Row from 'robust-react-ui/components/Table/Row';
import Cell from 'robust-react-ui/components/Table/Cell';
import Head from 'robust-react-ui/components/Table/Head';
import Header from 'robust-react-ui/components/Table/Header';
import Body from 'robust-react-ui/components/Table/Body';
import Foot from 'robust-react-ui/components/Table/Foot';

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
    className={getClassNames({
      'dcui-table': true,
      'dcui-table--striped': striped,
      'dcui-table--center-cells': centerCellContent,
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
