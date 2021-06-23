### Default

```jsx
import React from 'react';
import Form from 'robust-react-ui/build/components/Form';
const [values, setValues] = React.useState([
  {
    displayValue: 'Apple',
    keyValue: 'a',
    checked: false,
  },
  {
    displayValue: 'Apricot',
    keyValue: 'a2',
    checked: false,
  },
  {
    displayValue: 'Watermelon',
    keyValue: 'w',
    checked: true,
  },
  {
    displayValue: 'Banana',
    keyValue: 'b',
    checked: true,
  },
  {
    displayValue: 'Peach',
    keyValue: 'p',
    checked: true,
  },
  {
    displayValue: 'Orange',
    keyValue: 'o',
    checked: false,
  },
]);

const onSelectFunction = (keyValue, checked) => {
  setValues(
    values.map((option) => {
      if (option.keyValue === keyValue) {
        return { ...option, checked };
      }
      return option;
    })
  );
};

<Form>
  <Form.Label htmlFor="CheckboxGroup-example">Label</Form.Label>
  <Form.CheckboxGroup
    onSelectFunction={onSelectFunction}
    id="CheckboxGroup-example"
    placeholder="Type some text"
    type="text"
    ariaLabelledBy="checkbox-label"
    values={values}
  />
</Form>;
```
