### Features

- uses native html tags for accessibility
- supports multiple sizes
- supports multiple colour themes
- supports custom onClick function

### Themes

```jsx
<Button variant="primary">Click me</Button>
<Button variant="danger">Click me</Button>
<Button variant="secondary">Click me</Button>
<Button variant="success">Click me</Button>
```

### Sizes

```jsx
<Button size="large">Click me</Button>
<Button size="medium">Click me</Button>
<Button size="small">Click me</Button>
```

### Using onClickFunction

```jsx
const onClickFunction = () => alert('Hello');
<Button variant="secondary" onClickFunction={onClickFunction}>
  Click me
</Button>;
```
