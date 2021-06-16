### Features

- uses the controlled component design pattern
- supports multiple links
- support multiple sizes

### Small

```jsx
<Breadcrumbs
  size="small"
  data={[
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Nuhten',
    },
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Delore',
    },
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Ipsum',
    },
    {
      isCurrent: true,
      linkHref: '#',
      linkText: 'Lorem',
    },
  ]}
/>
```

### Medium

```jsx
<Breadcrumbs
  size="medium"
  data={[
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Nuhten',
    },
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Delore',
    },
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Ipsum',
    },
    {
      isCurrent: true,
      linkHref: '#',
      linkText: 'Lorem',
    },
  ]}
/>
```

### Large

```jsx
<Breadcrumbs
  size="large"
  data={[
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Nuhten',
    },
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Delore',
    },
    {
      isCurrent: false,
      linkHref: '#',
      linkText: 'Ipsum',
    },
    {
      isCurrent: true,
      linkHref: '#',
      linkText: 'Lorem',
    },
  ]}
/>
```
