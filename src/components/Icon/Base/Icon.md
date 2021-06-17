### Features

### Default

```jsx
import Icon from 'robust-react-ui/components/Icon';
<Icon>
  <Icon.Box />
</Icon>;
```

### Using different icons

```jsx
import Icon from 'robust-react-ui/components/Icon/Base';
<>
  <Icon>
    <Icon.ArrowDown />
  </Icon>
  <Icon>
    <Icon.AlertTriangle />
  </Icon>
  <Icon>
    <Icon.Code />
  </Icon>
  <Icon>
    <Icon.Home />
  </Icon>
  <Icon>
    <Icon.Picture />
  </Icon>
  <Icon>
    <Icon.Eye />
  </Icon>
  <Icon>
    <Icon.EyeOff />
  </Icon>
</>;
```

### Using custom paths

```jsx
import Icon from 'robust-react-ui/components/Icon/Base';
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
import Code from 'robust-react-ui/components/Icon/Code';
import Icon from 'robust-react-ui/components/Icon/Base';
<>
  <Icon>
    <Code />
  </Icon>
  <Icon variant="danger">
    <Code />
  </Icon>

  <Icon variant="success">
    <Code />
  </Icon>
  <Icon variant="dark">
    <Code />
  </Icon>
  <Icon variant="light">
    <Code />
  </Icon>
</>;
```

### Custom sizes

```jsx
import Code from 'robust-react-ui/components/Icon/Code';
import Icon from 'robust-react-ui/components/Icon/Base';
<>
  <Icon width={48} height={48}>
    <Code />
  </Icon>
  <Icon width={32} height={32}>
    <Code />
  </Icon>
  <Icon width={24} height={24}>
    <Code />
  </Icon>
  <Icon width={16} height={16}>
    <Code />
  </Icon>
</>;
```
