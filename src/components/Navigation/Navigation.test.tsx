// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Navigation from "./Navigation";
import { NavigationProps } from "./Navigation.types";

describe("Test Component", () => {
  let props: NavigationProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Navigation {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Navigation");

    expect(component).toHaveTextContent("harvey was here");
  });
});
