### Default

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState('');
const onChangeFunction = (event) => setValue(event.target.value);

<Form>
  <Form.Label htmlFor="textArea1">Label</Form.Label>
  <Form.TextArea
    placeholder="textarea placeholder text"
    id="textArea1"
    onChangeFunction={onChangeFunction}
    type="text"
    value={value}
  />
</Form>;
```

### Full width

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState('');
const onChangeFunction = (event) => setValue(event.target.value);

<Form>
  <Form.Label htmlFor="textArea2">Label</Form.Label>
  <Form.TextArea
    placeholder="textarea placeholder text"
    id="textArea2"
    fullWidth
    onChangeFunction={onChangeFunction}
    type="text"
    value={value}
  />
</Form>;
```

### Error state

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState('');
const onChangeFunction = (event) => setValue(event.target.value);
<Form>
  <Form.Label htmlFor="textArea3">Label</Form.Label>
  <Form.TextArea
    placeholder="textarea placeholder text"
    id="textArea3"
    error
    errorMessage="Something is wrong."
    onChangeFunction={onChangeFunction}
    type="text"
    value={value}
  />
</Form>;
```

### Disabled state

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState('');
const onChangeFunction = (event) => setValue(event.target.value);
<Form>
  <Form.Label htmlFor="textArea4">Label</Form.Label>
  <Form.TextArea
    placeholder="textarea placeholder text"
    id="textArea4"
    disabled
    onChangeFunction={onChangeFunction}
    type="text"
    value={value}
  />
</Form>;
```
