// Generated with util/create-component.js

import React from "react";

import { render } from "@testing-library/react";

import Pagination from "./Pagination";

import { PaginationProps } from "./Pagination.types";

describe("Test Component", () => {
  let props: PaginationProps;

  beforeEach(() => {
    props = {
      data: [
        {
          current: true,
          pageNumber: 1,
          href: "#",
        },
        {
          current: false,
          pageNumber: 2,
          href: "#",
        },
        {
          current: false,
          pageNumber: 3,
          href: "#",
        },
      ],
    };
  });

  const renderComponent = () => render(<Pagination {...props} />);

  it("should render with base class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Pagination");

    expect(component).toHaveClass("dcui-pagination");
  });
});
