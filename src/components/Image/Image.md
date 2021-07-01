### Features

- Uses native html tags for accessibility
- Supports different scaling options
- Supports circular images
- Supports bordered images
- Supports blurred images

### Default

```jsx
<Image
  alt="Lego pieces on the floor"
  src="https://picsum.photos/id/237/600/350"
  width={600}
  height={350}
/>
```

### Scaling - Unrestricted

```jsx
<Image
  scaling="unrestricted"
  bordered
  alt="Lego pieces on the floor"
  src="https://picsum.photos/id/237/600/350"
  width={600}
  height={350}
/>
```

### Scaling - Restricting width

```jsx
<Image
  scaling="restricted-width"
  bordered
  alt="Lego pieces on the floor"
  src="https://picsum.photos/id/237/600/350"
  width={600}
  height={350}
/>
```

### Bordered

```jsx
<Image
  bordered
  alt="Lego pieces on the floor"
  src="https://picsum.photos/id/237/600/350"
  width={600}
  height={350}
/>
```

### Blurred

```jsx
<Image
  blurred
  alt="Lego pieces on the floor"
  src="https://picsum.photos/id/237/600/350"
  width={600}
  height={350}
/>
```

### Circle

```jsx
<Image
  circle
  alt="Lego pieces on the floor"
  src="https://picsum.photos/id/237/600/350"
  width={350}
  height={350}
/>
```
