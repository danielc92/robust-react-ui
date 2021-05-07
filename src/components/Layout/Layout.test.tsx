// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Row from "./Layout";
import { RowProps } from "./Layout.types";
import Layout from "./Layout";

describe("Layout Suite", () => {
  let props: RowProps;

  beforeEach(() => {});

  const renderRow = () =>
    render(
      <Layout.Row>
        <Layout.Column>content 1</Layout.Column>
        <Layout.Column>content 2</Layout.Column>
        <Layout.Column>content 3</Layout.Column>
      </Layout.Row>
    );

  const renderContainer = () =>
    render(<Layout.Container>some content</Layout.Container>);

  it("Row should render correct class", () => {
    const { getByTestId } = renderRow();

    const component = getByTestId("Row");

    expect(component).toHaveClass("dcui-row");
  });
  it("Container should render correct class", () => {
    const { getByTestId } = renderContainer();

    const component = getByTestId("Container");

    expect(component).toHaveClass("dcui-container");
  });
});
