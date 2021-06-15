### Default

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) => setValue(event.target.value);

<Form>
<Form.Label>Label</Form.Label>
<Form.TextArea 
onChangeFunction={onChangeFunction} 
type="text" 
value={value}/>
</Form>
```

### Error state

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) =>setValue(event.target.value)
;
<Form>
<Form.Label>Label</Form.Label>
<Form.TextArea 
error
errorMessage="Something is wrong."
onChangeFunction={onChangeFunction} 
type="text" 
value={value}/>
</Form>
```

### Disabled state

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) =>setValue(event.target.value)
;
<Form>
<Form.Label>Label</Form.Label>
<Form.TextArea 
disabled
onChangeFunction={onChangeFunction} 
type="text" 
value={value}/>
</Form>
```