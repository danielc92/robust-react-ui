### Default

```jsx
import React from 'react';
const [options, setOptions] = React.useState([]);
const [mockData, setMockData] = React.useState([
  'apple',
  'banana',
  'orange',
  'watermelon',
  'peach',
]);
const [value, setValue] = React.useState('');
const onChangeFunction = (newValue) => {
  setOptions(
    mockData.filter((o) => o.toLowerCase().indexOf(newValue.toLowerCase()) > -1)
  );
};
const onSelectOptionFunction = (newValue) => setValue(newValue);
const onClearOptionsFunction = () => setOptions([]);
<AutoComplete
  options={options}
  value={value}
  onClearOptionsFunction={onClearOptionsFunction}
  onSelectOptionFunction={onSelectOptionFunction}
  onChangeFunction={onChangeFunction}
/>;
```
