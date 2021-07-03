### Features

- Uses native html tags for accessibility

### Default

```jsx
import Landmark from 'robust-react-ui/build/components/Landmark';
import Typography from 'robust-react-ui/build/components/Typography';

<Landmark.Region>
  <Typography.Paragraph>
    Amet incididunt cupidatat do magna incididunt. Cupidatat cupidatat qui eu
    irure nostrud id id in officia irure aliqua in ullamco. Qui incididunt sint
    ut qui pariatur officia deserunt consequat mollit. Nisi dolore proident
    culpa id nulla cupidatat sunt tempor nostrud sunt tempor. Lorem occaecat
    minim sunt do aliquip pariatur sint excepteur ipsum nulla incididunt
    commodo.Eu nulla tempor est voluptate do sint.
  </Typography.Paragraph>
</Landmark.Region>;
```

### How to name a Region

Note: you can also use the `ariaLabel` prop to name the `Region`.

```jsx
import Landmark from 'robust-react-ui/build/components/Landmark';
import Typography from 'robust-react-ui/build/components/Typography';

<Landmark.Region ariaLabelledBy="header-id">
  <Typography.Heading id="header-id">
    Proident culpa id nulla cupidatat sun
  </Typography.Heading>
  <Typography.Paragraph>
    Amet incididunt cupidatat do magna incididunt. Cupidatat cupidatat qui eu
    irure nostrud id id in officia irure aliqua in ullamco. Qui incididunt sint
    ut qui pariatur officia deserunt consequat mollit. Nisi dolore proident
    culpa id nulla cupidatat sunt tempor nostrud sunt tempor. Lorem occaecat
    minim sunt do aliquip pariatur sint excepteur ipsum nulla incididunt
    commodo.Eu nulla tempor est voluptate do sint.
  </Typography.Paragraph>
</Landmark.Region>;
```
