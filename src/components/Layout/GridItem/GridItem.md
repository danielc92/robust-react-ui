### Padding

```jsx
import Grid from 'robust-react-ui/components/Layout/Grid';
import Typography from 'robust-react-ui/components/Typography';
const heading = 'Sunt cupidatat anim duis occaecat. Adipisicing aliqua';
const paragraph =
  'Non pariatur incididunt eu culpa laboris ullamco ea. Magna culpa mollit in mollit. Sunt ea qui culpa ut labore Lorem est reprehenderit est eiusmod cupidatat eiusmod. Consequat fugiat aute ut sunt';
<Grid type="fluid">
  <Grid.GridItem paddingX="s" paddingY="s">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem paddingX="l" paddingY="l">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem paddingX="m" paddingY="m">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
</Grid>;
```

### Variants

```jsx
import Grid from 'robust-react-ui/components/Layout/Grid';
import Typography from 'robust-react-ui/components/Typography';
const heading = 'Sunt cupidatat anim duis occaecat. Adipisicing aliqua';
const paragraph =
  'Non pariatur incididunt eu culpa laboris ullamco ea. Magna culpa mollit in mollit. Sunt ea qui culpa ut labore Lorem est reprehenderit est eiusmod cupidatat eiusmod. Consequat fugiat aute ut sunt';
<Grid type="fluid">
  <Grid.GridItem paddingX="m" paddingY="m" variant="danger">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>{' '}
  <Grid.GridItem paddingX="m" paddingY="m" variant="primary">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>{' '}
  <Grid.GridItem paddingX="m" paddingY="m" variant="light">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem paddingX="m" paddingY="m" variant="dark">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
  <Grid.GridItem paddingX="m" paddingY="m" variant="success">
    <Typography.Heading level={4}>{heading}</Typography.Heading>
    <Typography.Paragraph>{paragraph}</Typography.Paragraph>
  </Grid.GridItem>
</Grid>;
```
