Code splitting is enabled in this library. Meaning you can import components directly in some cases, reducing your bundle size and increasing the overall performance of your application.

### Example 1: Importing components without code splitting

Using this method you get the benefit of intellisense. However it will import the full component, this may not be ideal especially in cases where the component is a compound component and has several children components.

```shell
import { Button, Link, Form } from 'robust-react-ui'
```

### Example 2: Importing components using code splitting

This is the optimal way to import. However you may have to dig through `build` folder to find the component you're looking for. Note: this method must be used for the `Icon` component, as it has over 280 children fragments.

```shell
import Button from 'robust-react-ui/build/components/Button';
import Icon from 'robust-react-ui/build/components/Icon';
# import two icon fragments
import Map from 'robust-react-ui/build/components/Icon/Map';
import Phone from 'robust-react-ui/build/components/Icon/Phone';
```
