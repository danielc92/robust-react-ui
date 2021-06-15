### Text

```jsx
initialState = {
    value: ''
}
const onChangeFunction = (event) => setState({...state, value: event.target.value})
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="text" 
value={state.value}/>
</Form>
```

### Error state

```jsx
initialState = {
    value: 'some bad value', 
    error: true,
    errorMessage: "something is wrong!"
}
const onChangeFunction = (event) => setState({...state, value: event.target.value})
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
error={state.error}
errorMessage={state.errorMessage}
onChangeFunction={onChangeFunction} 
type="text" 
value={state.value}/>
</Form>
```

### Disabled state

```jsx
initialState = {
    value: 'some bad value', 
    disabled: true
}
const onChangeFunction = (event) => setState({...state, value: event.target.value})
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
disabled={state.disabled}
type="text" 
value={state.value}/>
</Form>
```

### Password

```jsx
initialState = {
    value: ''
}
const onChangeFunction = (event) => setState({...state, value: event.target.value})
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="password" 
value={state.value}/>
</Form>
```



### Color

```jsx
initialState = {
    value: ''
}
const onChangeFunction = (event) => setState({...state, value: event.target.value})
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="color" 
value={state.value}/>
</Form>
```



### Date

```jsx
initialState = {
    value: ''
}
const onChangeFunction = (event) => setState({...state, value: event.target.value})
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="date" 
value={state.value}/>
</Form>
```