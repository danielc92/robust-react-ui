// Generated with util/create-component.js
import React from "react";
import Table from "./Table";

export default {
  title: "Table",
};

export const TableBasic = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const TableCentered = () => (
  <Table centerCellContent>
    <Table.Head>
      <Table.Row>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const TableStriped = () => (
  <Table striped>
    <Table.Head>
      <Table.Row>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const TableWithRowSpan = () => (
  <Table striped>
    <Table.Head>
      <Table.Row>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
        <Table.Header>Ipsum</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Header scope="row" rowSpan={3}>
          Lorem
        </Table.Header>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Header scope="row" rowSpan={2}>
          Lipsim
        </Table.Header>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
        <Table.Cell>Lorem</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
