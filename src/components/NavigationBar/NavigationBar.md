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
      linkName: 'Home',
      linkHref: 'https://github.com/danielc92/robust-react-ui',
    },

    {
      id: 17,
      parentId: null,
      linkName: 'Vegetables',
      children: [
        {
          id: 18,
          parentId: 17,
          linkName: 'Broccoli',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 19,
          parentId: 17,
          linkName: 'Carrot',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 20,
          parentId: 17,
          linkName: 'Radish',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 21,
          parentId: 17,
          linkName: 'Potato',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 22,
          parentId: 17,
          linkName: 'Eggplant',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
      ],
    },
    {
      id: 23,
      parentId: null,
      linkName: 'Nuts',
      children: [
        {
          id: 24,
          parentId: 23,
          linkName: 'Almonds',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 25,
          parentId: 23,
          linkName: 'Peanuts',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 26,
          parentId: 23,
          linkName: 'Cashew',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
        {
          id: 27,
          parentId: 23,
          linkName: 'Macadamia',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
      ],
    },
    {
      id: 2,
      parentId: null,
      linkName: 'Fruits',
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
              linkHref: 'https://github.com/danielc92/robust-react-ui',
            },
            {
              id: 11,
              parentId: 6,
              linkName: 'Strawberries',
              linkHref: 'https://github.com/danielc92/robust-react-ui',
            },

            {
              id: 13,
              parentId: 6,
              linkName: 'Kiwi',
              linkHref: 'https://github.com/danielc92/robust-react-ui',
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
              linkHref: 'https://github.com/danielc92/robust-react-ui',
            },
            {
              id: 6548,
              parentId: 5,
              linkName: 'Mango',
              linkHref: 'https://github.com/danielc92/robust-react-ui',
            },
            {
              id: 289654,
              parentId: 5,
              linkName: 'Lime',
              linkHref: 'https://github.com/danielc92/robust-react-ui',
            },
            {
              id: 2544,
              parentId: 5,
              linkName: 'Grape',
              linkHref: 'https://github.com/danielc92/robust-react-ui',
            },
          ],
        },

        {
          id: 4,
          parentId: 2,
          linkName: 'Other',
          linkHref: 'https://github.com/danielc92/robust-react-ui',
        },
      ],
    },
  ]}
/>
```
