### Default

```jsx
initialState = {
    open: false,
    bodyText: "Elit duis sit et enim. Qui non dolor consequat Lorem in eu ipsum irure qui labore. Consectetur dolore ipsum tempor excepteur Lorem enim. Occaecat culpa ipsum ipsum occaecat ullamco laboris Lorem elit",
    titleText:"Do cupidatat non consequat enim aute."
}
const onCloseActionFunction = () => setState({...state, open: false})
const onConfirmActionFunction = () => setState({...state, open: false})
const onClickFunction = () => setState({...state, open: true})
;<div>
<Button onClickFunction={onClickFunction}>Show</Button>
<AlertDialogue
    onCloseActionFunction={onCloseActionFunction}
    onConfirmActionFunction={onConfirmActionFunction}
    bodyText={state.bodyText}
    titleText={state.titleText}
    open={state.open}
    cancelButtonText="Close"
    confirmButtonText="Ok"
  />
</div>



```