### Features

- Flexbox based layout
- Different sizes quarter, third, half
- By default, columns are responsive and wrap on laptop, tablet and mobile breakpoints

### Quarter

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmod esse ad nullt.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmooccaecat mollit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```

### Half

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row>
  <Layout.Column size="half">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="half">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```

### Third

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row>
  <Layout.Column size="third">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="third">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>

  <Layout.Column size="third">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```

### Quarter (no wrap)

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row wrap={false}>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmod esse ad nullt.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="quarter">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmooccaecat mollit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```

### Half (no wrap)

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row wrap={false}>
  <Layout.Column size="half">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="half">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```

### Third (no wrap)

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row wrap={false}>
  <Layout.Column size="third">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="third">
    <Typography.Heading level={3}>Cupidatat temollit.</Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="third">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmod esse ad nullt.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```

### Custom tags

```jsx
import React from 'react';
import Layout from 'robust-react-ui/build/components/Layout';
import Typography from 'robust-react-ui/build/components/Typography';
<Layout.Row wrap={false}>
  <Layout.Column size="half" tagName="main">
    <Typography.Heading level={3}>
      Cupidatat tempor deserunt in do nisi eiusmllit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
  <Layout.Column size="half" tagName="section" ariaLabelledBy="Cupidatat">
    <Typography.Heading level={3} id="Cupidatat">
      Cupidatat temollit.
    </Typography.Heading>
    <Typography.Paragraph>
      Anim commodo laborum eu anim sint officia reprehenderit commodo anim ea
      officia esse occaecat. Laborum ipsum qui Lorem sint eiusmod Lorem. Ipsum
      commodo elit cillum.
    </Typography.Paragraph>
  </Layout.Column>
</Layout.Row>;
```
