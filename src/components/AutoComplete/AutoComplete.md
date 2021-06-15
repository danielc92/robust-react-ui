### Default

```jsx
initialState = {
    mockData: ['apple','banana','orange','watermelon','peach'],
    options: [],
    value: "",
}
const onChangeFunction = (newValue) => {
    setState({
        ...state,
        value: newValue,
        options: state.mockData.filter(
        (o) => o.toLowerCase().indexOf(newValue.toLowerCase()) > -1
      )
    }
      
    );
}
const onSelectOptionFunction = (newValue) => {
    console.log('ON SELECT', newValue)
    setState({...state, value: newValue})
}
const onClearOptionsFunction = () => setState({...state, options: []})
;<AutoComplete
      options={state.options}
      value={state.value}
      onClearOptionsFunction={onClearOptionsFunction}
      onSelectOptionFunction={onSelectOptionFunction}
      onChangeFunction={onChangeFunction}
    />
```