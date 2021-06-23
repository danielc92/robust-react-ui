### Features

- uses native html tags for accessibility
- supports multiple sizes
- supports multiple colour themes
- supports custom onClick function

### Themes

```jsx
import React from 'react';
import Button from 'robust-react-ui/build/components/Button';
<>
  <Button variant="primary">Click me</Button>
  <Button variant="danger">Click me</Button>
  <Button variant="secondary">Click me</Button>
  <Button variant="success">Click me</Button>
</>;
```

### Sizes

```jsx
import React from 'react';
import Button from 'robust-react-ui/build/components/Button';
<>
  <Button size="large">Click me</Button>
  <Button size="medium">Click me</Button>
  <Button size="small">Click me</Button>
</>;
```

### Embedding icons

```jsx
import React from 'react';
import Button from 'robust-react-ui/build/components/Button';
import Icon from 'robust-react-ui/build/components/Icon';
import Box from 'robust-react-ui/build/components/Icon/Box';
import Layout from 'robust-react-ui/build/components/Layout';
const { Row } = Layout;

<>
  <Button variant="success" size="small">
    <Row alignY="middle">
      <Icon variant="light" width={18} height={18}>
        <Box />
      </Icon>
      <span>Learn more</span>
    </Row>
  </Button>
  <Button variant="success" size="medium">
    <Row alignY="middle">
      <Icon variant="light" width={20} height={20}>
        <Box />
      </Icon>
      <span>Learn more</span>
    </Row>
  </Button>
  <Button variant="success" size="large">
    <Row alignY="middle">
      <Icon variant="light">
        <Box />
      </Icon>
      <span>Learn more</span>
    </Row>
  </Button>

  <Button size="small" square ariaLabel="visit gallery">
    <Icon variant="light" width={18} height={18}>
      <Box />
    </Icon>
  </Button>
  <Button size="medium" square ariaLabel="visit gallery">
    <Icon variant="light" width={20} height={20}>
      <Box />
    </Icon>
  </Button>
  <Button size="large" square ariaLabel="visit gallery">
    <Icon variant="light">
      <Box />
    </Icon>
  </Button>
</>;
```

### Using onClickFunction

```jsx
import React from 'react';
import Button from 'robust-react-ui/build/components/Button';
const onClickFunction = () => alert('Hello');
<Button variant="secondary" onClickFunction={onClickFunction}>
  Click me
</Button>;
```
