### Features

Features split into two sections below;

### Fixed type

- Grid based layout.
- Default of 6 column layout
- Supports consistent spacing between GridItems, both horizontally and vertically
- Supports highly custom layouts
- Supports auto resizing on tablet and mobile breakpoints
- On tablet layout changes to 4 columns
- On mobile layout changes to 2 columns
- Uses media queries under the hood to achieve responsive layout
- More suitable towards image gallerys or high level layouts

### Fluid type

- Media query free responsive grid items of a predefined size
- Does not use media queries to achieve responsive layout
- More suitable for homogeous items, such as products or article listing

### Fixed (default)

```jsx
import Grid from 'robust-react-ui/build/components/Layout/Grid';
import Typography from 'robust-react-ui/build/components/Typography';
const heading = 'Sunt cupidatat anim ';
const paragraph =
  'Non pariatur incididunt eu culpa laboris ullamco ea. Magna culpa mollit in mollit. Sunt ea qui culpa ut labore  sunt';
<Grid gap="m">
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>

  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
</Grid>;
```

### Fixed, with custom layout

```jsx
import Grid from 'robust-react-ui/build/components/Layout/Grid';
import Typography from 'robust-react-ui/build/components/Typography';
const heading = 'Sunt cupidatat anim ';
const paragraph =
  'Non pariatur incididunt eu culpa laboris ullamco ea. Magna culpa mollit in mollit. Sunt ea qui culpa ut labore  sunt';
<Grid gap="m">
  <Grid.GridItem
    variant="danger"
    config={{
      colStart: 2,
      rowStart: 2,
      width: 3,
      height: 2,
    }}
  >
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem
    variant="success"
    config={{
      colStart: 4,
      rowStart: 1,
      width: 3,
      height: 1,
    }}
  >
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>{' '}
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>{' '}
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
</Grid>;
```

### Fluid

```jsx
import Grid from 'robust-react-ui/build/components/Layout/Grid';
import Typography from 'robust-react-ui/build/components/Typography';
const heading = 'Sunt cupidatat anim duis occaecat. Adipisicing aliqua';
const paragraph =
  'Non pariatur incididunt eu culpa laboris ullamco ea. Magna culpa mollit in mollit. Sunt ea qui culpa ut labore Lorem est reprehenderit est eiusmod cupidatat eiusmod. Consequat fugiat aute ut sunt';
<Grid type="fluid" gap="m">
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem>
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
</Grid>;
```
