### Features

- 286 icons available from the feather icon set.

### Default

```jsx
import Icon from 'robust-react-ui/build/components/Icon';
import CheckCircle from 'robust-react-ui/build/components/Icon/CheckCircle';
<Icon>
  <CheckCircle />
</Icon>;
```

### Using different icons

```jsx
import Icon from 'robust-react-ui/build/components/Icon/Base';
import CheckCircle from 'robust-react-ui/build/components/Icon/CheckCircle';
import Cloud from 'robust-react-ui/build/components/Icon/Cloud';
import Clipboard from 'robust-react-ui/build/components/Icon/Clipboard';
import ChevronUp from 'robust-react-ui/build/components/Icon/ChevronUp';
<>
  <Icon>
    <CheckCircle />
  </Icon>
  <Icon>
    <Cloud />
  </Icon>
  <Icon>
    <Clipboard />
  </Icon>
  <Icon>
    <ChevronUp />
  </Icon>
</>;
```

### Using custom paths

```jsx
import Icon from 'robust-react-ui/build/components/Icon/Base';
<Icon>
  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
  <line x1="12" y1="22.08" x2="12" y2="12"></line>
</Icon>;
```

### Using variants (themes)

The default is "primary"

```jsx
import Box from 'robust-react-ui/build/components/Icon/Box';
import Icon from 'robust-react-ui/build/components/Icon/Base';
<>
  <Icon>
    <Box />
  </Icon>
  <Icon variant="danger">
    <Box />
  </Icon>

  <Icon variant="success">
    <Box />
  </Icon>
  <Icon variant="dark">
    <Box />
  </Icon>
  <Icon variant="light">
    <Box />
  </Icon>
</>;
```

### Custom sizes

```jsx
import Box from 'robust-react-ui/build/components/Icon/Box';
import Icon from 'robust-react-ui/build/components/Icon/Base';
<>
  <Icon width={48} height={48}>
    <Box />
  </Icon>
  <Icon width={32} height={32}>
    <Box />
  </Icon>
  <Icon width={24} height={24}>
    <Box />
  </Icon>
  <Icon width={16} height={16}>
    <Box />
  </Icon>
</>;
```
