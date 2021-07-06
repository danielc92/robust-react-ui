### Primary

```jsx
import React from 'react';
import ProgressBar from 'robust-react-ui/build/components/ProgressBar';
<ProgressBar variant="primary" currentValue={80} />;
```

### Danger

```jsx
import React from 'react';
import ProgressBar from 'robust-react-ui/build/components/ProgressBar';
<ProgressBar variant="danger" currentValue={35} />;
```

### Success

```jsx
import React from 'react';
import ProgressBar from 'robust-react-ui/build/components/ProgressBar';
<ProgressBar variant="success" currentValue={60} />;
```

### Full Width

```jsx
import React from 'react';
import ProgressBar from 'robust-react-ui/build/components/ProgressBar';
<ProgressBar variant="primary" fullWidth currentValue={80} />;
```

### Custom minimum and maximum

```jsx
import React from 'react';
import ProgressBar from 'robust-react-ui/build/components/ProgressBar';
<ProgressBar
  variant="primary"
  currentValue={35}
  minimumValue={20}
  maximumValue={60}
/>;
```
