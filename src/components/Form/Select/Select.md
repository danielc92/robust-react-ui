 


### Default

```jsx
import React from 'react';
import Form from 'components/Form';
const [selectedValue, setSelected] = React.useState("");

const onChangeFunction = (event) => {
   setSelected(event.target.value)
}
;<Form>
<Form.Label htmlFor="select-example">Label</Form.Label>
<Form.Select id="select-example" onChangeFunction={onChangeFunction} selectedValue={selectedValue} values={[
      {
        displayValue: 'Apple',
        keyValue: 'a',
      },
      {
        displayValue: 'Orange',
        keyValue: 'o',
      },
      {
        displayValue: 'Pear',
        keyValue: 'p',
      },
      {
        displayValue: 'Peace',
        keyValue: 'p2',
      },
    ]}/>
</Form>
```