 


### Default

```jsx
initialState = {
    selectedValue: '',
    id: 'Select-example',   
    values: [
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
    ],
}
const onChangeFunction = (event) => {
    setState({ ...state, selectedValue: event.target.value})
}
;<Form>
<Form.Label>Label</Form.Label>
<Form.Select onChangeFunction={onChangeFunction} selectedValue={state.selectedValue} values={state.values}/>
</Form>
```