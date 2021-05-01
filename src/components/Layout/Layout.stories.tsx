// Generated with util/create-component.js
import React from "react";
import Typography from "../Typography/Typography";
import Layout from "./Layout";
import Row from "./Layout";

export default {
  title: "Layout",
};

export const ContainerSmall = () => (
  <Layout.Container size="small">
    <Typography.Paragraph>
      Max width container Max width container Max width container Max width
      container Max width container Max width container Max width container Max
      width container Max width container Max width container Max width
      container Max width container Max width container Max width container Max
      width container Max width container
    </Typography.Paragraph>
  </Layout.Container>
);
export const ContainerLarge = () => (
  <Layout.Container size="large">
    <Typography.Paragraph>
      Max width container Max width container Max width container Max width
      container Max width container Max width container Max width container Max
      width container Max width container Max width container Max width
      container Max width container Max width container Max width container Max
      width container Max width container
    </Typography.Paragraph>
  </Layout.Container>
);

export const ThreeColumn = () => (
  <Layout.Row wrap={true}>
    {new Array(7).fill(0).map((x) => (
      <Layout.Column size="third">
        <Typography.Heading level={3}>Lorem Ipsum</Typography.Heading>
        <Typography.Paragraph>
          Fugiat do id cillum non mollit aute.non mollit aute.
        </Typography.Paragraph>
      </Layout.Column>
    ))}
  </Layout.Row>
);

export const FourColumn = () => (
  <Layout.Row wrap={true}>
    {new Array(7).fill(0).map((x) => (
      <Layout.Column size="quarter">
        <Typography.Heading level={3}>Lorem Ipsum</Typography.Heading>
        <Typography.Paragraph>
          Fugiat do id cillum non mollit aute.non mollit aute.
        </Typography.Paragraph>
      </Layout.Column>
    ))}
  </Layout.Row>
);

export const TwoColumn = () => (
  <Layout.Row wrap={true}>
    {new Array(7).fill(0).map((x) => (
      <Layout.Column size="half">
        <Typography.Heading level={3}>Lorem Ipsum</Typography.Heading>
        <Typography.Paragraph>
          Fugiat do id cillum non mollit aute.non mollit aute.
        </Typography.Paragraph>
      </Layout.Column>
    ))}
  </Layout.Row>
);
