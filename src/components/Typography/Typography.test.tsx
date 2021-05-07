// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Typography from "./Typography";
import { HeadingProps, ParagraphProps } from "./Typography.types";

describe("Heading Suit", () => {
  let props: HeadingProps;

  beforeEach(() => {
    props = {
      children: "hello world",
      id: "heading",
    };
  });

  const renderComponent = () => render(<Typography.Heading {...props} />);

  it("should render text correct", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Heading");
    expect(component).toHaveTextContent("hello world");
  });

  it("should contain correct base class", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Heading");
    expect(component).toHaveClass("dcui-header");
  });
  it("should contain correct level class", () => {
    const renderComponent = () =>
      render(<Typography.Heading level={3} {...props} />);
    const { getByTestId } = renderComponent();
    const component = getByTestId("Heading");
    expect(component).toHaveClass("dcui-header__3");
  });
});

describe("Paragraph Suite", () => {
  let props: ParagraphProps;

  beforeEach(() => {
    props = {
      children: "hello world",
      id: "para",
      size: "large",
    };
  });

  const renderComponent = () => render(<Typography.Paragraph {...props} />);

  it("should render text correct", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Paragraph");
    expect(component).toHaveTextContent("hello world");
  });

  it("should contain correct base class", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Paragraph");
    expect(component).toHaveClass("dcui-para");
  });

  it("should contain the large class modifier", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Paragraph");
    expect(component).toHaveClass("dcui-para--large");
  });
});
