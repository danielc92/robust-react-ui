// Generated with util/create-component.js
import React from "react";
import TabList from "./TabList";
import Typography from "../Typography";
export default {
  title: "TabList",
};

const tabData = [
  {
    tabId: "pluto-tab",
    buttonLabel: "Pluto",
    buttonId: "pluto",
    tabContent: (
      <Typography.Paragraph>
        incididunt et fugiat cillum in voluptate dolor. Tempor in deserunt ex
        amet nisi magna reprehenderit cupidatat est quis eu ad enim non. Ipsum
        esse amet pariatur amet in. Elit ex reprehenderit voluptate id
        reprehenderit nisi minim exercitation.
      </Typography.Paragraph>
    ),
  },
  {
    tabId: "earth-tab",
    buttonLabel: "Earth",
    buttonId: "earth",

    tabContent: (
      <Typography.Paragraph>
        Commodo qui incididunt et fugiat cillum in voluptate dolor. Tempor in
        desriatur amet in. Elit ex reprehenderit voluptate id reprehenderit nisi
        minim exercitation.
      </Typography.Paragraph>
    ),
  },
  {
    tabId: "venus-tab",
    buttonLabel: "Venus",
    buttonId: "venus",
    tabContent: (
      <Typography.Paragraph>
        meid reprehenderit nisi minim exercitation.
      </Typography.Paragraph>
    ),
  },
  {
    tabId: "jupiter-tab",
    buttonLabel: "Jupiter",
    buttonId: "jupiter",
    tabContent: (
      <Typography.Paragraph>
        Commodo qui incididunt et fugiat cillum in voluptate dolor. Tempor in
        deserunt ex amet nisi magna reprehenderit cupidatat est quis eu ad enim
        non. Ipsum esse amet pariatur amet in. Elit ex reprehenderit voluptate
        id reprehenderit nisi minim exercitation.
      </Typography.Paragraph>
    ),
  },
];

export const Basic = () => (
  <TabList ariaLabel="Information about planets" tabs={tabData}></TabList>
);

export const Danger = () => (
  <TabList
    ariaLabel="Information about planets"
    tabs={tabData}
    variant="danger"
  ></TabList>
);

export const Success = () => (
  <TabList
    ariaLabel="Information about planets"
    tabs={tabData}
    variant="success"
  ></TabList>
);

export const Secondary = () => (
  <TabList
    ariaLabel="Information about planets"
    tabs={tabData}
    variant="secondary"
  ></TabList>
);
