### Text

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) => setValue(event.target.value);

<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
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
<Form.Input 
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
<Form.Input 
disabled
onChangeFunction={onChangeFunction} 
type="text" 
value={value}/>
</Form>
```

### Password
```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) =>setValue(event.target.value)
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="password" 
value={value}/>
</Form>
```

### Color

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) =>setValue(event.target.value)
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="color" 
value={value}/>
</Form>
```


### Date

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) =>setValue(event.target.value)
;
<Form>
<Form.Label>Label</Form.Label>
<Form.Input 
onChangeFunction={onChangeFunction} 
type="date" 
value={value}/>
</Form>
```