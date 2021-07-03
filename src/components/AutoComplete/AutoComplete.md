### Features

- Uses controlled component pattern
- Display a list of results from the parent component
- Pressing up or down key will focus and select
- Mouse hover will focus and select
- If down is pressed and last item is selected, the first item will be selected
- If up is pressed and first item is selected, the last item will be selected
- Pressing escape closes the popup
- Clicking away from popup will close the popup (blur)

### Default

```jsx
import React from 'react';
import AutoComplete from 'robust-react-ui/build/components/AutoComplete';
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
  setValue(newValue);
  setOptions(
    mockData.filter((o) => o.toLowerCase().indexOf(newValue.toLowerCase()) > -1)
  );
};
const onSelectOptionFunction = (newValue) => setValue(newValue);
const onClearOptionsFunction = () => setOptions([]);
<AutoComplete
  labelText="Autocomplete label"
  options={options}
  value={value}
  onClearOptionsFunction={onClearOptionsFunction}
  onSelectOptionFunction={onSelectOptionFunction}
  onChangeFunction={onChangeFunction}
/>;
```
