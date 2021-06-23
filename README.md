# Robust React UI

The goal is provide a react library of components, which are robust, extensible and meet general accessibility guidelines.

## Storybook

Click the [following link](https://develop--60b75a95d763ec0039b4429c.chromatic.com/) to see the latest `develop` branch.

## CI

![maintest](https://github.com/danielc92/dc-react-ui/actions/workflows/main-test.yml/badge.svg) ![mainbuild](https://github.com/danielc92/dc-react-ui/actions/workflows/main-build.yml/badge.svg)
![devtest](https://github.com/danielc92/dc-react-ui/actions/workflows/develop-test.yml/badge.svg) ![devbuild](https://github.com/danielc92/dc-react-ui/actions/workflows/develop-build.yml/badge.svg)

## Getting started

`npm install robust-react-ui`

or with yarn

`yarn add robust-react-ui`

in app.tsx

```
import React from "react";
// Import css file
import "robust-react-ui/build/styles/main.css";
import { Button, Typography } from "robust-react-ui";
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

## Documentation

This library has been documented using React Styleguidist. Click [here to view the docs](https://danielc92.github.io/robust-react-ui/).

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
