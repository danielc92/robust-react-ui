// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Landmark from "./Landmark";
import { LandmarkProps } from "./Landmark.types";

describe("Landmark Suite", () => {
  let props: LandmarkProps;

  beforeEach(() => {});
  const renderMain = () => render(<Landmark.Main>some content</Landmark.Main>);
  const renderRegion = () =>
    render(<Landmark.Region>some content</Landmark.Region>);
  const renderComplementary = () =>
    render(<Landmark.Complementary>some content</Landmark.Complementary>);
  const renderContentInfo = () =>
    render(<Landmark.ContentInfo>some content</Landmark.ContentInfo>);

  it("Complementary should render correct text", () => {
    const { getByTestId } = renderComplementary();

    const component = getByTestId("Complementary");

    expect(component).toHaveTextContent("some content");
  });

  it("Complementary should render a <aside> tag", () => {
    const { getByTestId } = renderComplementary();

    const component = getByTestId("Complementary");

    expect(component.nodeName).toEqual("ASIDE");
  });

  it("Contentinfo should render correct text", () => {
    const { getByTestId } = renderContentInfo();

    const component = getByTestId("ContentInfo");

    expect(component).toHaveTextContent("some content");
  });

  it("Contentinfo should render a <footer> tag", () => {
    const { getByTestId } = renderContentInfo();

    const component = getByTestId("ContentInfo");

    expect(component.nodeName).toEqual("FOOTER");
  });

  it("Main should render correct text", () => {
    const { getByTestId } = renderMain();

    const component = getByTestId("Main");

    expect(component).toHaveTextContent("some content");
  });
  it("Main should render a <main> tag", () => {
    const { getByTestId } = renderMain();

    const component = getByTestId("Main");

    expect(component.nodeName).toEqual("MAIN");
  });
  it("Region should render correct text", () => {
    const { getByTestId } = renderRegion();

    const component = getByTestId("Region");
    expect(component).toHaveTextContent("some content");
  });
  it("Region should render a <section> tag", () => {
    const { getByTestId } = renderRegion();

    const component = getByTestId("Region");

    expect(component.nodeName).toEqual("SECTION");
  });
});
