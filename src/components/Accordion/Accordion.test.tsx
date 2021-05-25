// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";

describe("Accordian Suite", () => {
  let props: AccordionProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Accordion {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Accordian");

    expect(component).toHaveTextContent("harvey was here");
  });
});
