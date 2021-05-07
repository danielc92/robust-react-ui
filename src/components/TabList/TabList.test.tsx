// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TabList from "./TabList";
import { TabListProps } from "./TabList.types";

describe("TabList Suite", () => {
  let props: TabListProps;

  beforeEach(() => {
    props = {
      tabs: [
        {
          buttonId: "apple",
          buttonLabel: "Apples",
          tabContent:
            "Irure in mollit laboris pariatur officia amet laboris aliqua duis culpa enim eu. Laborum proident occaecat ad officia esse. Nulla nostrud aliqua aute tempor. Cupidatat magna pariatur excepteur irure aliqua cillum qui laborum. Culpa consequat mollit id aute nulla irure incididunt sint ipsum irure aute.",
          tabId: "apple-tab",
        },
        {
          buttonId: "banana",
          buttonLabel: "Banana",
          tabContent:
            "Irure in mollit laboris pariatur officia amet laboris aliqua duis culpa enim eu. Laborum proident occaecat ad officia esse. Nulla nostrud aliqua aute tempor. Cupidatat magna pariatur excepteur irure aliqua cillum qui laborum. Culpa consequat mollit id aute nulla irure incididunt sint ipsum irure aute.",
          tabId: "banana-tab",
        },
      ],
      ariaLabel: "Tab list",
      fullWidth: true,
    };
  });

  const renderComponent = () => render(<TabList {...props} />);

  it("Should render correct base class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TabList");
    expect(component).toHaveClass("dcui-tablist");
  });
});
