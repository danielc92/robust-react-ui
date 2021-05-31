// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";
import {
  FormInputProps,
  FormSelectProps,
  FormTextAreaProps,
} from "./Form.types";

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
  it("TextArea should render with error", () => {
    props.error = true;
    props.errorMessage = "an error has occured!";
    const { getByTestId, debug } = renderComponent();
    debug();

    const component = getByTestId("TextAreaWrapper");
    expect(
      component.getElementsByClassName("dcui-form__textarea-error")
    ).toHaveLength(1);
  });
  it("TextArea should render with error message", () => {
    props.error = true;
    props.errorMessage = "an error has occured!";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextAreaWrapper");
    expect(
      component.getElementsByClassName("dcui-form__textarea-error")[0]
    ).toHaveTextContent("an error has occured!");
  });
});

describe("Form Select Suite", () => {
  let props: FormSelectProps;
  beforeEach(() => {
    props = {
      values: [
        {
          displayValue: "option 1",
          keyValue: "opt1",
        },
        {
          displayValue: "option 2",
          keyValue: "opt2",
        },
        {
          displayValue: "option 3",
          keyValue: "opt3",
        },
      ],
      id: "example-select",
      selectedValue: "opt1",
      onChangeFunction: () => {},
    };
  });
  const renderComponent = () => render(<Form.Select {...props} />);

  it("Select should render the correct class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Select");

    expect(component).toHaveClass("dcui-form__select");
  });
  it("Select should render the correct value", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Select");
    expect(component).toHaveValue("opt1");
  });

  it("Select should render exactly 3 values", () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId("SelectOption");
    expect(components).toHaveLength(3);
  });
  it("Select option should have the correct text", () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId("SelectOption");
    expect(components[2]).toHaveTextContent("option 3");
  });
  it("Select option should render as option", () => {
    const { getAllByTestId } = renderComponent();
    const components = getAllByTestId("SelectOption");
    expect(components[2].nodeName).toEqual("OPTION");
  });
});
