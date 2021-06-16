### Features

- uses the compound component design pattern

### Full Example

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState({
  input_1: '',
  input_2: '',
  input_3: '',
});
const onChangeFunction = (event) => {
  setValue({ ...value, [event.target.name]: event.target.value });
};
const onSubmitFunction = () => alert(JSON.stringify(value));
<Form onSubmitFunction={onSubmitFunction}>
  <Form.FieldSet>
    <Form.Legend>Legend text</Form.Legend>
    <Form.Label htmlFor="input_1">Label text</Form.Label>
    <Form.Input
      name="input_1"
      placeholder="Enter some text"
      id="input_1"
      onChangeFunction={onChangeFunction}
      type="text"
      value={value.input_1}
    />

    <Form.Label htmlFor="input_2">Label text 2</Form.Label>
    <Form.Input
      name="input_2"
      placeholder="Enter some text"
      id="input_2"
      onChangeFunction={onChangeFunction}
      type="text"
      value={value.input_2}
    />

    <Form.Label htmlFor="input_3">Label text 3</Form.Label>
    <Form.Input
      name="input_3"
      placeholder="Enter some text"
      id="input_3"
      onChangeFunction={onChangeFunction}
      type="text"
      value={value.input_3}
    />
  </Form.FieldSet>
  <Form.Submit>Submit</Form.Submit>
</Form>;
```
