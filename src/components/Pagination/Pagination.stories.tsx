// Generated with util/create-component.js

import React from "react";

import Pagination from "./Pagination";

import { PaginationProps } from "./Pagination.types";

export default {
  title: "Pagination",
};

const props: PaginationProps = {
  data: [
    {
      current: false,
      href: "#",
      pageNumber: 1,
    },
    {
      current: true,
      href: "#",
      pageNumber: 2,
    },
    {
      current: false,
      href: "#",
      pageNumber: 3,
    },
    {
      current: false,
      href: "#",
      pageNumber: 4,
    },
    {
      current: false,
      href: "#",
      pageNumber: 5,
    },
    {
      current: false,
      href: "#",
      pageNumber: 6,
    },
  ],
};

export const Basic = () => <Pagination {...props} />;

export const Rounded = () => <Pagination {...props} rounded />;
