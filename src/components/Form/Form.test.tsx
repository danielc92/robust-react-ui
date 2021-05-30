// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";
import { FormInputProps, FormTextAreaProps } from "./Form.types";

describe("Form Input Suite", () => {
  let props: FormInputProps;
  beforeEach(() => {
    props = {
      value: "welcome to the jungle",
      id: "sample-input",
      placeholder: "type text",
      onChangeFunction: () => console.log("."),
    };
  });
  const renderComponent = () => render(<Form.Input {...props} />);

  it("Input should render the correct class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Input");

    expect(component).toHaveClass("dcui-form__input");
  });
  it("Input should render the correct value", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Input");
    expect(component).toHaveValue("welcome to the jungle");
  });
});

describe("Form TextArea Suite", () => {
  let props: FormTextAreaProps;
  beforeEach(() => {
    props = {
      value: "welcome to the jungle",
      id: "sample-input",
      placeholder: "type text",
      onChangeFunction: () => console.log("."),
    };
  });
  const renderComponent = () => render(<Form.TextArea {...props} />);

  it("TextArea should render the correct class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextArea");

    expect(component).toHaveClass("dcui-form__textarea");
  });
  it("TextArea should render the correct value", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextArea");
    expect(component).toHaveValue("welcome to the jungle");
  });
});
