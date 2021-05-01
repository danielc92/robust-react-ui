// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TabList from "./TabList";
import { TabListProps } from "./TabList.types";

describe("Test Component", () => {
  let props: TabListProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TabList {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TabList");

    expect(component).toHaveTextContent("harvey was here");
  });
});
