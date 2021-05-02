// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AlertDialogue from "./AlertDialogue";
import { AlertDialogueProps } from "./AlertDialogue.types";

describe("Test Component", () => {
  let props: AlertDialogueProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<AlertDialogue {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AlertDialogue");

    expect(component).toHaveTextContent("harvey was here");
  });
});
