// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Alert from "./Alert";
import { AlertProps } from "./Alert.types";

describe("Alert Suite", () => {
  let props: AlertProps;

  beforeEach(() => {
    props = {
      variant: "primary",
      children: "alert message",
    };
  });

  const renderComponent = () => render(<Alert {...props} />);

  it("should render base class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Alert");

    expect(component).toHaveClass("dcui-alert");
  });
  it("should render primary modifier class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Alert");

    expect(component).toHaveClass("dcui-alert--primary");
  });
  it("should render danger modifier class", () => {
    props.variant = "danger";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Alert");

    expect(component).toHaveClass("dcui-alert--danger");
  });
  it("should render success modifier class", () => {
    props.variant = "success";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Alert");

    expect(component).toHaveClass("dcui-alert--success");
  });

  it("should render correct text", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Alert");

    expect(component).toHaveTextContent("alert message");
  });
  it("should have alert role", () => {
    const { getByRole } = renderComponent();

    const component = getByRole("alert");

    expect(component).toBeDefined();
  });
});
