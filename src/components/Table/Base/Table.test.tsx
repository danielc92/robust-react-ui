// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";

describe("Table suite", () => {
  const renderComponent = () =>
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>Animals</Table.Header>
            <Table.Header>Sources</Table.Header>
            <Table.Header>Planets</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

  it("should render corret base class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Table");

    expect(component).toHaveClass("dcui-table");
  });
});
