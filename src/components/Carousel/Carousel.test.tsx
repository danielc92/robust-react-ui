// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";

describe("Test Component", () => {
  let props: CarouselProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Carousel {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Carousel");

    expect(component).toHaveTextContent("harvey was here");
  });
});
