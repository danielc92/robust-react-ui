### Default

```jsx
import React from 'react';
import Button from 'components/Button';
const [open, setOpen] = React.useState(false)
const onCloseActionFunction = () =>setOpen(false)
const onConfirmActionFunction = () => setOpen(false)
const onClickFunction = () => setOpen(true)
;<div>
<Button onClickFunction={onClickFunction}>Show</Button>
<AlertDialogue
    onCloseActionFunction={onCloseActionFunction}
    onConfirmActionFunction={onConfirmActionFunction}
    bodyText="Proident ex nostrud ex qui culpa utLabore ex duis aliqua culpa et."
    titleText="Cillumm fugiat Lorem esse."
    open={open}
    cancelButtonText="Close"
    confirmButtonText="Ok"
  />
</div>



```