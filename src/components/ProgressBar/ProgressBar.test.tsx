// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

describe("Progress Suite", () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      currentValue: 50;
    };
  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it("should render correct class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    expect(component).toHaveClass("dcui-progress");
  });
  it("should render correct class (2)", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    expect(component).toHaveClass("dcui-progress--primary");
  });
  it("should render correct class (3)", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    expect(component).toHaveClass("dcui-progress--medium");
  });

  it("should render correct class (4)", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBarInner");

    expect(component).toHaveClass("dcui-progress__inner");
  });
});
