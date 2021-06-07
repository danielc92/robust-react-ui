# Daniel Corcoran's React UI Library 🐲

The goal is provide a react library of components, which are robust, extensible and meet general accessibility guidelines. This project is currently **not published** on npm.

## Storybook
Click the [following link](https://develop--60b75a95d763ec0039b4429c.chromatic.com/) to see the latest `develop` branch.

## CI

![maintest](https://github.com/danielc92/dc-react-ui/actions/workflows/main-test.yml/badge.svg) ![mainbuild](https://github.com/danielc92/dc-react-ui/actions/workflows/main-build.yml/badge.svg)
![devtest](https://github.com/danielc92/dc-react-ui/actions/workflows/develop-test.yml/badge.svg) ![devbuild](https://github.com/danielc92/dc-react-ui/actions/workflows/develop-build.yml/badge.svg)

## Getting started

TBD.

## Documentation

### Components
- [Accordion](#accordion)
  - [Accordion.Panel](#accordionpanel)
- [Alert](#alert)
- [AlertDialogue](#alertdialogue)
- [Breadcrumbs](#breadcrumbs)
- [Button](#button)
- [Form](#form)
  - [Form.Legend](#formlegend)
  - [Form.Label](#formlabel)
  - [Form.FieldSet](#formfieldset)
  - [Form.Input](#forminput)
  - [Form.Select](#formselect)
  - [Form.TextArea](#formtextarea)
  - [Form.CheckboxGroup](#formcheckboxgroup)
  - [Form.Submit](#formsubmit)
- [Image](#image)
- [Landmark](#landmark)
  - [Landmark.Main](#landmarkmain)
  - [Landmark.Complementary](#landmarkcomplementary)
  - [Landmark.ContentInfo](#landmarkcontentinfo)
  - [Landmark.Region](#landmarkregion)
- [Layout](#layout)
  - [Layout.Column](#layoutcolumn)
  - [Layout.Container](#layoutcontainer)
  - [Layout.Row](#layoutRow)
- [Link](#link)
- [ProgressBar](#progressbar)
- [NavigationBar](#navigationbar)
- [Table](#table)
  - [Table.Body](#tablebody)
  - [Table.Row](#tablerow)
  - [Table.Cell](#tablecell)
  - [Table.Head](#tablehead)
  - [Table.Header](#tableheader)
  - [Table.Foot](#tablefoot)
- [TabList](#tablist)
- [Typography](#typography)
  - [Typography.Heading](#typographyheading)
  - [Typography.Paragraph](#typographyparagraph)



#### AutoComplete

Description: An autocomplete form component.

`AutoCompleteProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `options`              | `Array<string>`                 |         |    yes     | 
| `labelText`              | `string`                 |         |      yes   | 
| `value`              | `string`                 |         |     yes   | 
| `labelId`              | `string`                 |         |  yes       | 
| `onChangeFunction`              | `(value: string) => void`                 |         |    yes     | 
| `onSelectOptionFunction`              | `(value: string) => void`                 |         |   yes      | 
| `onClearOptionsFunction`              | `() => void`                 |         |    yes     | 




#### Accordion

Description: Base component for Accordion.

`AccordionProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|----------|
| `children`              | `ReactNode`                 |         | yes        | 
| `activePanel`           | `string`                    |         | yes        | 
| `fullWidth`             | `boolean`                   |         | no        |  
| `onSelectPanelFunction` | `(panelId: string) => void` |         | yes        |  

#### Accordion.Panel

Description: A compound component for the Accordion.

`AccordionProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|----------|
| `children`              | `ReactNode`                 |         | yes        | 
| `panelTitle`           | `string`                    |         | yes        | 
| `panelId`             | `string`                   |         | yes      |  

#### Alert

Description: An alert component.

`AlertProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|----------|
| `children`              | `ReactNode`                 |         | yes        | 
| `variant`           | `'primary', 'success', 'danger'`                    |         | no        | 
| `fullWidth`             | `boolean`                   |         | no      |  
| `visible`             | `boolean`                   |         | no      |  
| `onCloseActionFunction`             | `(visibleState: boolean) => void`                   |         |no      |  


#### AlertDialogue

Description: A Modal dialogue component, with confirm and cancel action buttons.

`AlertDialogueProps`
  
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `open`              | `boolean`                 |         |   yes      | 
| `titleText`              | `string`                 |         |        yes | 
| `bodyText`              | `string`                 |         |       yes  | 
| `confirmButtonText`              | `string`                 |         |    no     | 
| `cancelButtonText`              | `string`                 |         |    no     | 
| `onCloseActionFunction`              | `() => void`                 |         |        yes | 
| `onConfirmActionFunction`              | `() => void`                 |         |  yes       | 


### Breadcrumbs

Description: Breadcrumb link group component.

`BreadcrumbsProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `ariaLabel`              | `string`                 |         |    no     | 
| `data`              | `Array<Breadcrumb>`                |         |        yes | 
| `size`              | `'small', 'medium', 'large'`                 |         |     no    | 

`Breadcrumb`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `linkHref`              | `string, null`                 |         |   yes     | 
| `linkText`              | `string`                |         |        yes | 
| `isCurrent`              | `boolean`                 |         |     yes    | 


### Button

Description: A button component.

`ButtonProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `size`              | `'small' | 'medium' | 'large'`                 |         |       no  | 
| `variant`              | `'primary' | 'danger' | 'success' | 'secondary'`                 |         |   no      | 
| `children`              | `React.ReactNode`                 |         |     yes    | 
| `id`              | `string`                 |         |       no  | 
| `tabIndex`              | `number`                 |         |   no      | 
| `ariaControls`              | `string`                 |         |        no | 
| `onClickFunction`              | `(e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void`                 |         |       no  | 
| `onKeyDownFunction`           | `(event: React.KeyboardEvent<HTMLButtonElement>) => void`                    |         |  no       | 

#### Form

Description: Base component for form elements.

`FormProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |       yes  | 
| `onSubmitFunction`              | `()=>void`                 |         |    yes     | 
| `ariaDescribedBy`              | `string`                 |         |     no    | 


#### Form.CheckboxGroup

Description: -

`FormCheckboxGroupProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `id`              | `string`                 |         |        yes | 
| `values`              | `CheckboxOptionProps[]`                 |         |    yes     | 
| `ariaLabelledBy`              | `string`                 |         |   yes      | 
| `onSelectFunction`              | `(keyValue: string, checkedValue: boolean) => void`                 |         |    yes     | 


`CheckboxOptionProps  `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `displayValue: `              | `string`                 |         |        yes | 
| `keyValue`              | `string`                 |         |    yes     | 
| `checked`              | `boolean`                 |         |   yes      | 


#### Form.FieldSet

Description: A form compound component, to insert a fieldset.

`FormFieldSetProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         | yes        | 



#### Form.Input

Description: A form compound component for inputs.

`FormInputProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `id`              | `string`                 |         |     yes    | 
| `value`              | `string`                 |         |       yes  | 
| `placeholder`              | `string`                 |         |       yes  | 
| `type`              | `'text', 'password', 'date'`                 |         |          no  | 
| `onChangeFunction`              | `(event: React.ChangeEvent<HTMLInputElement>) => void`                 |         |     yes    | 
| `onBlurFunction`              | `(event: React.FocusEvent<HTMLInputElement>) => void`                 |         |     no    | 
| `fullWidth`              | `boolean`                 |         |         no   | 
| `error`           | `boolean`                    |         |          no  | 
| `errorMessage`             | `string`                   |         |       no   |  
| `disabled`             | `boolean`                   |         |       no   |  

#### Form.Legend

Description: A form compound component for legends.

`FormLegendProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `React.ReactNode`                 |         | yes        | 
| `id`              | `string`                 |         |  no       | 
| `htmlFor`              | `string`                 |         |  no       | 
| `required`              | `boolean`                 |         | no        | 

#### Form.Label

Description: A form compound component for labels.

`FormLegendProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `React.ReactNode`                 |         | yes        | 
| `id`              | `string`                 |         |  yes       | 

#### Form.Select

Description: A form compound component for select.

`FormSelectProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `id`              | `string`                 |         |        yes | 
| `multiple`              | `boolean`                 |         |         no| 
| `selectedValue`              | `string, Array<string>`                 |         |   yes      | 
| `values`              | `Array<FormSelectOptionProps>`                 |         |        yes | 
| `onChangeFunction`              | `(event: React.FocusEvent<HTMLSelectElement>) => void`                 |         |  yes       | 
| `onBlurFunction`              | `(event: React.FocusEvent<HTMLSelectElement>) => void`                 |         |  no       | 
| `disabled`              | `boolean`                 |         |      no   | 

`FormSelectProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `displayValue: `              | `string`                 |         |        yes | 
| `keyValue`              | `string`                 |         |         yes| 


#### Form.TextArea

Description: A form compound component for a textarea.

`FormTextAreaProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `id`              | `string`                 |         |   yes      | 
| `value`              | `string`                 |         |       yes | 
| `placeholder`              | `string`                 |         |       yes  | 
| `onChangeFunction`              | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void`                 |         |   yes      | 
| `onBlurFunction`              | `(event: React.FocusEvent<HTMLTextAreaElement>) => void`                 |         |  no       | 
| `rows`              | `number`                 |         |      no  | 
| `fullWidth`              | `boolean`                 |         |     no    | 
| `error`           | `boolean`                    |         |      no  | 
| `errorMessage`             | `string`                   |         |   no    |  
| `disabled`             | `boolean`                   |         |     no  |  

#### Form.Submit

Description: A form compound component for a submit button.

`FormSubmitProps `

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `size`              | `'small', 'medium', 'large'`                 |         |no         | 
| `variant`              | `'primary', 'danger', 'success'`                 |         |no         | 
| `value`              | `string`                 |         |     yes    | 
| `id`              | `string`                 |         |      no   | 


#### Image

Description: An image component.

`ImageProps`
  
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `height`              | `number`                 |         |     no    | 
| `width`              | `number`                 |         |     no    | 
| `alt`              | `string`                 |         |      yes   | 
| `scaling`              | `'unrestricted', 'restricted-width'`                 |         |     no    | 
| `style`              | `React.CSSProperties`                 |         |     no    | 
| `circle`              | `boolean`                 |         |     no    | 
| `bordered`              | `boolean`                 |         |    no     | 
| `blurred`              | `boolean`                 |         |    no     | 
| `src`              | `string`                 |         |    yes     | 



#### Pagination

Description: Component for a group of pagination buttons.

`PaginationProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `rounded`              | `boolean`                 |         |      no   | 
| `ariaLabel`              | `string`                 |         |        no | 
| `data`              | `PaginationButtonProps[]`                 |         |         yes| 


`PaginationButtonProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `current`              | `boolean`                 |         |      yes   | 
| `href`              | `string`                 |         |        yes | 
| `pageNumber`              | `number`                 |         |         yes| 


#### ProgressBar

Description: -

`ProgressBarProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `minimumValue`              | `number`                 |         |      no   | 
| `maximumValue`              | `number`                 |         |        no | 
| `currentValue`              | `number`                 |         |         yes| 
| `fullWidth`              | `boolean`                 |         |         no| 
| `size`              | `'small', 'medium', 'large'`                 |         |         no| 
| `variant`              | `'primary', 'secondary', 'danger', 'success'`                 |         |       no  | 


#### Landmark

Description: The base component for Landmarks.

`LandmarkProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 

#### Landmark.Complementary

Description: A compound landmark component for an element with the complementary role.

`ComplementaryProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 
| `ariaLabelledBy`              | `string`                 |         |    no     | 

#### Landmark.ContentInfo

Description: A compound landmark component for an element with the contentinfo role.

`ContentInfoProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 
| `ariaLabelledBy`              | `string`                 |         |    no     | 


#### Landmark.Region

Description: A compound landmark component for an element with the contentinfo role.

`RegionProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 
| `ariaLabelledBy`              | `string`                 |         |    no     | 
| `ariaLabel`              | `string`                 |         |    no     | 

#### Landmark.Main

Description: A compound landmark component for an element with the contentinfo role.

`MainProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 


#### Layout

Description: The base component for Layout.

`LandmarkProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 



#### Layout.Row

Description: A compound layout component for a row.

`ContentInfoProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 
| `wrap`              | `boolean`                 |         |    no     | 


#### Layout.Column

Description: A compound layout component for a column.

`RegionProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 
| `size`              | `'third', 'half', 'quarter'`                 |         |    no     | 


#### Layout.Container

Description: A compound layout component for a container.

`ContainerProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |    yes     | 
| `size`              | ` 'small', 'medium', 'large'`                 |         |    no     | 


#### Link

Description: A link component.

`LinkProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 
| `size`              | `'small', 'medium', 'large'`                 |         |         no| 
| `display`              | `'inline', 'block'`                 |         |no         | 
| `href`              | `string`                 |         |         yes| 
| `ariaLabel`              | `string`                 |         |        no | 
| `ariaDescribedBy`              | `string`                 |         |no         | 




#### NavigationBar

Description: A navigation bar which supports nested dropdowns.

`NavigationBarProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `data`              | `NavigationData[]`                 |         |    yes     | 
| `onEnterLinkFunction`              | `(href: string) => void`                 |         |        no | 
| `ariaLabel`              | `string`                 |         |     yes    | 
| `id`              | `string`                 |         |      no   | 

`NavigationData`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `parentId`              | `null, number`                 |         |  yes       | 
| `id`              | `number`                 |         |      yes   | 
| `linkName`              | `string`                 |         |   yes      | 
| `linkHref`              | `string`                 |         |     no    | 
| `children`              | `NavigationData[]`                 |         | no        | 
| `hasSeparator`              | `boolean`                 |         |       no  | 



#### Table

Description: Base component for Table.

`TableProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 
| `striped`              | `boolean`                 |         |         no| 
| `centerCellContent`              | `centerCellContent`                 |         |no         | 
| `id`              | `string`                 |         |         no| 
| `ariaLabel`              | `string`                 |         |        bi | 
| `ariaDescribedBy`              | `string`                 |         |no         | 

#### Table.Body

Description: Compound Table component for inserting a table's body.

`TableBodyProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 

#### Table.Foot

Description: Compound Table component for inserting a table's foot.

`TableFootProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 

#### Table.Head

Description: Compound Table component for inserting a table's head.

`TableHeadProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 

#### Table.Row

Description: Compound Table component for inserting rows.

`TableRowProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 


#### Table.Cell

Description: Compound Table component for inserting cells.

`TableCellProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 



#### Table.Header

Description: Compound Table component for inserting headers.

`TableHeaderProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |     yes    | 
| `scope`              | `'col', 'row'`                 |         |     no    | 
| `colSpan`              | `number`                 |         |     no    | 
| `rowSpan`              | `number`                 |         |     no    | 



#### TabList

Description: Tab list component.

`TabListProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `ariaLabel`              | `string`                 |         |         no| 
| `variant`              | `'primary','danger','success','secondary'`                 |         |    no     | 
| `tabs`              | `Array<TabListTab>`                 |         |     yes    | 
| `fullWidth`              | `boolean`                 |         |         no| 

`TabListTab`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `tabId`              | `string`                 |         |         yes| 
| `buttonLabel`              | `string`                 |         |    yes     | 
| `buttonId`              | `string`                 |         |     yes    | 
| `tabContent`              | `string,ReactNode`                 |         |         yes| 


#### Typography

Description: Base component for typography.

`TypographyProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |yes         | 

#### Typography.Paragraph

Description: Compound paragraph component for typography.

`ParagraphProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         | yes       | 
| `id`              | `string`                 |         |         no| 
| `bolded`              | `boolean`                 |         |      no   | 
| `size`              | `'small','medium','large'`                 |         |no         | 

#### Typography.Heading 

Description: Compound heading component for typography.

`<HeadingProps>`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         | yes       | 
| `id`              | `string`                 |         |         no| 
| `level`              | `1, 2, 3, 4, 5, 6`                 |         |      no   | 
| `jumbo`              | `boolean`                 |         |no         | 



## Maintainers

- [Daniel Corcoran](https://github.com/danielc92)

## Looking to contribute?

If you want to contribute, feel free to send me a message.


## Credits & Resources

### Design patterns & Accessibility

- [Index of ARIA Design Pattern Examples](https://www.w3.org/TR/wai-aria-practices/examples/)
- [ARIA Landmarks](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)

### Styling

- [Top 50 Google Font Pairings [Handpicked by Pro Designers]](https://www.pagecloud.com/blog/best-google-fonts-pairings)
- [Pure CSS Navigation Bar](https://codepen.io/drweb/pen/VwYNjxG)

### Misc

- [Javascript event keycode debugger](https://keycode.info/)
- The base repo for this project was forked [from here](https://blog.harveydelaney.com/creating-your-own-react-component-library/).
