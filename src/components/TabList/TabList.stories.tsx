// Generated with util/create-component.js
import React from "react";
import TabList from "./TabList";
import Typography from "../Typography";
import { Meta, Story } from "@storybook/react";
import { TabListProps } from "./TabList.types";
export default {
  title: "Components/TabList",
  component: TabList,
  args: {
    ariaLabel: "Four planets",
    tabs: [
      {
        tabId: "pluto-tab",
        buttonLabel: "Pluto",
        buttonId: "pluto",
        tabContent: (
          <Typography.Paragraph>
            incididunt et fugiat cillum in voluptate dolor. Tempor in deserunt
            ex amet nisi magna reprehenderit cupidatat est quis eu ad enim non.
            Ipsum esse amet pariatur amex amet nisi magna reprehenderit
            cupidatat est quis eu ad enim non. Ipsum esse amet pariatuex amet
            nisi magna reprehenderit cupidatat est quis eu ad enim non. Ipsum
            esse amet pariatuet in. Elit ex reprehenderit voluptate id
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
            Commodo qui incididunt et fugiat cillum in voluptate dolor. Tempor
            in desriatur amet in. Elit ex rex amet nisi magna reprehenderit
            cupidatat est quis eu ad enim non. Ipsum esse amet pariatuex amet
            nisi magna reprehenderit cupidatat est quis eu ad enim non. Ipsum
            esse amet pariatuex amet nisi magna reprehenderit cupidatat est quis
            eu ad enim non. Ipsum esse amet pariatueprehenderit voluptate id
            reprehenderit nisi minim exercitation.
          </Typography.Paragraph>
        ),
      },
      {
        tabId: "venus-tab",
        buttonLabel: "Venus",
        buttonId: "venus",
        tabContent: (
          <Typography.Paragraph>
            meid reprehenderit nisi ex amet nisi magna reprehenderit cupidatat
            est quis eu ad enim non. Ipsum esse amet pariatuex amet nisi magna
            reprehenderit cupidatat est quis eu ad enim non. Ipsum esse amet
            pariatuex amet nisi magna reprehenderit cupidatat est quis eu ad
            enim non. Ipsum esse amet pariatuex amet nisi magna reprehenderit
            cupidatat est quis eu ad enim non. Ipsum esse amet pariatuex amet
            nisi magna reprehenderit cupidatat est quis eu ad enim non. Ipsum
            esse amet pariatuex amet nisi magna reprehenderit cupidatat est quis
            eu ad enim non. Ipsum esse amet pariatuminim exercitation.
          </Typography.Paragraph>
        ),
      },
      {
        tabId: "jupiter-tab",
        buttonLabel: "Jupiter",
        buttonId: "jupiter",
        tabContent: (
          <Typography.Paragraph>
            Commodo qui incididunt et fugiat cillum in voluptate dolor. Tempor
            in deserunt ex amet nisi magna reprehenderit cupidatat est quis eu
            ad enim non. Ipsum esse amet pariatuex amet nisi magna reprehenderit
            cupidatat est quis eu ad enim non. Ipsum esse amet pariatur amet in.
            Elit ex reprehenderit voluptate id reprehenderit nisi minim
            exercitation.
          </Typography.Paragraph>
        ),
      },
    ],
  },
} as Meta<TabListProps>;

const Template: Story<TabListProps> = (args) => {
  return <TabList {...args} />;
};

export const Primary: Story<TabListProps> = Template.bind({});
Primary.args = {};
export const PrimaryFullWidth: Story<TabListProps> = Template.bind({});
PrimaryFullWidth.args = {
  fullWidth: true,
};
export const Danger: Story<TabListProps> = Template.bind({});
Danger.args = {
  variant: "danger",
};
export const Success: Story<TabListProps> = Template.bind({});
Success.args = {
  variant: "success",
};
