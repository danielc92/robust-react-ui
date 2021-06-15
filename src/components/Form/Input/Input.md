### Text

```jsx
import React from 'react';
import Form from 'components/Form';
const [value, setValue] = React.useState("");
const onChangeFunction = (event) => setValue(event.target.value);

<Form>
<Form.Label htmlFor="input_1">Label</Form.Label>
<Form.Input 
id="input_1"
name="input_1"
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
<Form.Label htmlFor="input_1">Label</Form.Label>
<Form.Input 
id="input_1"
name="input_1"
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
<Form.Label htmlFor="input_1">Label</Form.Label>
<Form.Input 
id="input_1"
name="input_1"
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
<Form.Label htmlFor="input_1">Label</Form.Label>
<Form.Input 
id="input_1"
name="input_1"
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
<Form.Label htmlFor="input_1">Label</Form.Label>
<Form.Input 
id="input_1"
name="input_1"
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
<Form.Label htmlFor="input_1">Label</Form.Label>
<Form.Input 
id="input_1"
name="input_1"
onChangeFunction={onChangeFunction} 
type="date" 
value={value}/>
</Form>
```