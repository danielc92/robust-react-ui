// Generated with util/create-component.js
import React from "react";
import Link from "./Link";
import { LinkProps } from "./Link.types";

export default {
  title: "Link",
};

const props: LinkProps = {
  children: "learn more about",
  href: "https://github.com/danielc92/dc-react-ui",
  ariaLabel: "daniels github repo",
};

export const Basic = () => <Link {...props} />;
