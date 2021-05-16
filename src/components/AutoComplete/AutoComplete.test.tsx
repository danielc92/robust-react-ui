// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AutoComplete from "./AutoComplete";
import { AutoCompleteProps } from "./AutoComplete.types";

describe("Test Component", () => {
  let props: AutoCompleteProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<AutoComplete {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AutoComplete");

    expect(component).toHaveTextContent("harvey was here");
  });
});
