### Features

- uses the controlled component pattern
- support for rounded button theme

### Default

```jsx
import React from 'react';
import Pagination from 'robust-react-ui/build/components/Pagination';
<Pagination
  data={[
    {
      current: false,
      href: '#',
      pageNumber: 1,
    },
    {
      current: true,
      href: '#',
      pageNumber: 2,
    },
    {
      current: false,
      href: '#',
      pageNumber: 3,
    },
    {
      current: false,
      href: '#',
      pageNumber: 4,
    },
    {
      current: false,
      href: '#',
      pageNumber: 5,
    },
    {
      current: false,
      href: '#',
      pageNumber: 6,
    },
  ]}
  ariaLabel="Pagination label"
  rounded={false}
/>;
```

### Rounded

```jsx
import React from 'react';
import Pagination from 'robust-react-ui/build/components/Pagination';
<Pagination
  data={[
    {
      current: false,
      href: '#',
      pageNumber: 1,
    },
    {
      current: true,
      href: '#',
      pageNumber: 2,
    },
    {
      current: false,
      href: '#',
      pageNumber: 3,
    },
    {
      current: false,
      href: '#',
      pageNumber: 4,
    },
    {
      current: false,
      href: '#',
      pageNumber: 5,
    },
    {
      current: false,
      href: '#',
      pageNumber: 6,
    },
  ]}
  ariaLabel="Pagination label"
  rounded={true}
/>;
```
