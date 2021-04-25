// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Landmark from "./Landmark";
import { LandmarkProps } from "./Landmark.types";

describe("Test Component", () => {
  let props: LandmarkProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Landmark {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Landmark");

    expect(component).toHaveTextContent("harvey was here");
  });
});
