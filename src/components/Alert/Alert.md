### Primary

```jsx
initialState = {
  open: true,
};
const onCloseActionFunction = () => setState({ open: !state.open });
<Alert onCloseActionFunction={onCloseActionFunction} visible={state.open}>
  <p className="dcui-para dcui-para--medium">
    Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad eiusmod
    proident adipisicing.
  </p>
</Alert>;
```

### Danger

```jsx
initialState = {
  open: true,
};
const onCloseActionFunction = () => setState({ open: !state.open });
<Alert
  variant="danger"
  onCloseActionFunction={onCloseActionFunction}
  visible={state.open}
>
  <p className="dcui-para dcui-para--medium">
    Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad eiusmod
    proident adipisicing.
  </p>
</Alert>;
```

### Success

```jsx
initialState = {
  open: true,
};
const onCloseActionFunction = () => setState({ open: !state.open });
<Alert
  variant="success"
  onCloseActionFunction={onCloseActionFunction}
  visible={state.open}
>
  <p className="dcui-para dcui-para--medium">
    Et consectetur ex fugiat quis ipsum id aute adipisicing magna ex ad eiusmod
    proident adipisicing.
  </p>
</Alert>;
```
