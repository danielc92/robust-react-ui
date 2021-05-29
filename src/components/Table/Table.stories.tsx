// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Table",
  component: Table,
  args: {},
} as Meta<TableProps>;

const Template: Story<TableProps> = (args) => {
  return (
    <Table {...args}>
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
};

export const Basic: Story<TableProps> = Template.bind({});
export const Striped: Story<TableProps> = Template.bind({});
Striped.args = { striped: true };

export const Centered: Story<TableProps> = Template.bind({});
Centered.args = { centerCellContent: true };

export const WithRowSpan = () => (
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
