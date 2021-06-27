### Features

- close button accessible by keyboard
- ability to pass in children
- supports multiple colour themes

### Primary

```jsx
import React from 'react';
import Alert from 'robust-react-ui/build/components/Alert';
import Typography from 'robust-react-ui/build/components/Typography';
const [open, setOpen] = React.useState(true);
const onCloseActionFunction = () => setOpen(false);
<Alert onCloseActionFunction={onCloseActionFunction} visible={open}>
  <Typography.Paragraph>
    Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad eiusmod
    proident adipisicing.
  </Typography.Paragraph>
</Alert>;
```

### Danger

```jsx
import React from 'react';
import Alert from 'robust-react-ui/build/components/Alert';
import Typography from 'robust-react-ui/build/components/Typography';
const [open, setOpen] = React.useState(true);
const onCloseActionFunction = () => setOpen(false);
<Alert
  variant="danger"
  onCloseActionFunction={onCloseActionFunction}
  visible={open}
>
  <Typography.Paragraph>
    Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad eiusmod
    proident adipisicing.
  </Typography.Paragraph>
</Alert>;
```

### Success

```jsx
import React from 'react';
import Alert from 'robust-react-ui/build/components/Alert';
import Typography from 'robust-react-ui/build/components/Typography';
const [open, setOpen] = React.useState(true);
const onCloseActionFunction = () => setOpen(false);
<Alert
  variant="success"
  onCloseActionFunction={onCloseActionFunction}
  visible={open}
>
  <Typography.Paragraph>
    Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad eiusmod
    proident adipisicing.
  </Typography.Paragraph>
</Alert>;
```
