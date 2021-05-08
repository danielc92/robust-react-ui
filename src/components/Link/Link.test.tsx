// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Link from "./Link";
import { LinkProps } from "./Link.types";

describe("Test Component", () => {
  let props: LinkProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Link {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Link");

    expect(component).toHaveTextContent("harvey was here");
  });
});
