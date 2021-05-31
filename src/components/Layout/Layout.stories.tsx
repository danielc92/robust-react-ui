// Generated with util/create-component.js
import React from "react";
import Typography from "../Typography/Typography";
import Layout from "./Layout";

export default {
  title: "Components/Layout",
};

export const ContainerSmall = () => (
  <Layout.Container size="small">
    <Typography.Paragraph>
      Do consequat eu aliqua nisi. Magna in ipsum eiusmod tempor do quis
      consectetur dolore dolor. Ullamco consectetur nostrud officia sint
      adipisicing amet ad sunt amet in pariatur anim. Reprehenderit officia eu
      deserunt non eu culpa quis duis do anim id laboris. Ullamco do commodo
      culpa sunt sunt labore Lorem occaecat do fugiat adipisicing ut. Duis culpa
      reprehenderit ex eiusmod ullamco. Reprehenderit laborum id consequat culpa
      laborum pariatur officia officia voluptate eiusmod irure tempor.
    </Typography.Paragraph>
    <Typography.Paragraph>
      Do consequat eu aliqua nisi. Magna in ipsum eiusmod tempor do quis
      consectetuReprehenderit laborum id consequat culpa laborum pariatur
      officia officia voluptate eiusmod irure tempor.
    </Typography.Paragraph>
    <Typography.Paragraph>
      Do consequat eu aliqua nisi. Magna in ipsum eiusmod tempor do quis
      consectetur dolore dolor. Ullamco consectetur nostrud officia sint
      adipisicing amet ad sunt amet in pariatur anim. Reprehenderit officia eu
      deserunt non eu culpa quis duis do anim id laboris. Ullamco do commodo
      culpa sunt sunt labore Lorem occaecat do fugiat adipisicing ut. Duis culpa
      reprehenderit ex eiusmod ullamco. Reprehenderit laborum id consequat culpa
      laborum pariatur officia officia voluptate eiusmod irure tempor.
    </Typography.Paragraph>
  </Layout.Container>
);
export const ContainerLarge = () => (
  <Layout.Container size="large">
    <Typography.Paragraph>
      Aliqua id labore culpa nisi amet consequat deserunt veniam. Magna
      cupidatat excepteur mollit excepteur ut ipsum. Cillum anim laborum ea eu
      mollit fugiat officia et irure magna.
    </Typography.Paragraph>
    <Typography.Paragraph>
      Aliqua id labore culpa nisi amet consequat deserunt veniam. Magna
      cupidatat excepteur mollit excepteur ut ipsum. Cillum anim laborum ea eu
      mollit fugiat officia et irure magna.
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
