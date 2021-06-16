### Features

- uses the controlled component design pattern
- supports nested dropdowns 2 levels deep
- hover to open menus
- full keyboard support
  - left arrow key to close current menu
  - right arrow key to open sub menu
  - down arrow key
  - escape to close all menus

### Default

```jsx
<NavigationBar
  id="my-nav"
  ariaLabel="sample navigation bar"
  data={[
    {
      id: 1,
      parentId: null,
      linkName: 'Google',
      linkHref: 'https://github.com',
    },
    {
      id: 2,
      parentId: null,
      linkName: 'Fruit Listing',
      children: [
        {
          id: 6,
          parentId: 2,
          linkName: 'Sweet Fruits',
          children: [
            {
              id: 10,
              parentId: 6,
              linkName: 'Apple',
              linkHref: 'https://github.com',
            },
            {
              id: 11,
              parentId: 6,
              linkName: 'Strawberries',
              linkHref: 'https://github.com',
            },

            {
              id: 13,
              parentId: 6,
              linkName: 'Kiwi',
              linkHref: 'https://github.com',
            },
          ],
        },
        {
          id: 5,
          parentId: 2,
          linkName: 'Sour Fruits',
          children: [
            {
              id: 54,
              parentId: 5,
              linkName: 'Lemon',
              linkHref: 'https://github.com',
            },
            {
              id: 6548,
              parentId: 5,
              linkName: 'Mango',
              linkHref: 'https://github.com',
            },
            {
              id: 289654,
              parentId: 5,
              linkName: 'Lime',
              linkHref: 'https://github.com',
            },
            {
              id: 2544,
              parentId: 5,
              linkName: 'Grape',
              linkHref: 'https://github.com',
            },
          ],
        },

        {
          id: 4,
          parentId: 2,
          linkName: 'Other',
          linkHref: 'https://github.com',
        },
      ],
    },
    {
      id: 3,
      parentId: null,
      linkName: 'About us',
      linkHref: 'https://github.com',
    },
  ]}
/>
```
