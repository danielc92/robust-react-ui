![test](https://github.com/danielc92/dc-react-ui/actions/workflows/test.yml/badge.svg) ![build](https://github.com/danielc92/dc-react-ui/actions/workflows/build.yml/badge.svg)[![Netlify Status](https://api.netlify.com/api/v1/badges/32cdd572-cbba-4297-865d-9045926cd729/deploy-status)](https://app.netlify.com/sites/robust-react-ui/deploys)

# Robust React UI

A react library of components, which are robust, well tested, extensible and meet general accessibility guidelines.

## Documentation

[Click here](https://robust-react-ui.netlify.app/) to view the latest documentation.

## Getting started

`npm install robust-react-ui`

or with yarn

`yarn add robust-react-ui`

in app.tsx

```js
import React from 'react';
// Import CSS file
import 'robust-react-ui/build/styles/main.css';
import { Button, Typography } from 'robust-react-ui';
function App() {
  return (
    <>
      <Typography.Heading level={2}>Hello world</Typography.Heading>
      <Button>Click me</Button>
    </>
  );
}

export default App;
```

## Maintainers

- [Daniel Corcoran](https://github.com/danielc92)

## Looking to contribute?

If you want to contribute, feel free to send me a message.

## Credits & Resources

### Design patterns & Accessibility

- [Index of ARIA Design Pattern Examples](https://www.w3.org/TR/wai-aria-practices/examples/)
- [ARIA Landmarks](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)
- [Controlled components](https://reactjs.org/docs/forms.html#controlled-components)

### Styling

- [Top 50 Google Font Pairings [Handpicked by Pro Designers]](https://www.pagecloud.com/blog/best-google-fonts-pairings)
- [Pure CSS Navigation Bar](https://codepen.io/drweb/pen/VwYNjxG)

### Misc

- [Javascript event keycode debugger](https://keycode.info/)
- The base repo for this project was forked [from here](https://blog.harveydelaney.com/creating-your-own-react-component-library/).
