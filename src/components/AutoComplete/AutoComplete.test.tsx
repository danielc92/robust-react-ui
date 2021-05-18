// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AutoComplete from "./AutoComplete";
import { AutoCompleteProps } from "./AutoComplete.types";

describe("Autocomplete Suite", () => {
  let props: AutoCompleteProps;

  beforeEach(() => {
    props = {
      options: ["banana", "apple", "orange", "pear"],
      labelId: "my-autocomplete",
      labelText: "choose food",
      onSearchFunction: () => console.log("."),
    };
  });

  const renderComponent = () => render(<AutoComplete {...props} />);

  it("should render with base class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("AutoComplete");

    expect(component).toHaveClass("dcui-autocomplete");
  });

  it("Label should render with correct text", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AutoCompleteLabel");
    expect(component).toHaveTextContent("choose food");
  });

  it("Label should render with correct class", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AutoCompleteLabel");
    expect(component).toHaveClass("dcui-autocomplete__label");
  });

  it("Input should render", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("AutoCompleteInput");
    expect(component.nodeName).toEqual("INPUT");
  });

  it("Listbox should render with correct class", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AutoCompleteListbox");
    expect(component).toHaveClass("dcui-autocomplete__listbox");
  });

  it("Listbox should render with --showing class", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("AutoCompleteListbox");
    expect(component).toHaveClass("dcui-autocomplete__listbox--show");
  });
});
