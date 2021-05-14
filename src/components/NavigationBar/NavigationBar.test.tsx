// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import NavigationBar from "./NavigationBar";
import { NavigationBarProps } from "./NavigationBar.types";

describe("Test Component", () => {
  let props: NavigationBarProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<NavigationBar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("NavigationBar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
