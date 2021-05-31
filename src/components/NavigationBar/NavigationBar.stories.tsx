// Generated with util/create-component.js
import React from "react";
import NavigationBar from "./NavigationBar";

export default {
  title: "Components/NavigationBar",
};

const sampleLink = "https://github.com";
const navData = [
  {
    id: 1,
    parentId: null,
    linkName: "Google",
    linkHref: sampleLink,
  },
  {
    id: 2,
    parentId: null,
    linkName: "Fruit Listing",
    children: [
      {
        id: 6,
        parentId: 2,
        linkName: "Sweet Fruits",
        children: [
          {
            id: 10,
            parentId: 6,
            linkName: "Apple",
            linkHref: sampleLink,
          },
          {
            id: 11,
            parentId: 6,
            linkName: "Strawberries",
            linkHref: sampleLink,
          },

          {
            id: 13,
            parentId: 6,
            linkName: "Kiwi",
            linkHref: sampleLink,
          },
        ],
      },
      {
        id: 5,
        parentId: 2,
        linkName: "Sour Fruits",
        children: [
          {
            id: 54,
            parentId: 5,
            linkName: "Lemon",
            linkHref: sampleLink,
          },
          {
            id: 6548,
            parentId: 5,
            linkName: "Mango",
            linkHref: sampleLink,
          },
          {
            id: 289654,
            parentId: 5,
            linkName: "Lime",
            linkHref: sampleLink,
          },
          {
            id: 2544,
            parentId: 5,
            linkName: "Grape",
            linkHref: sampleLink,
          },
        ],
      },

      {
        id: 4,
        parentId: 2,
        linkName: "Other",
        linkHref: sampleLink,
      },
    ],
  },
  {
    id: 3,
    parentId: null,
    linkName: "About us",
    linkHref: sampleLink,
  },
];

export const Basic = () => (
  <NavigationBar
    data={navData}
    ariaLabel="my navigation bar"
    id="my navigation bar"
  />
);
