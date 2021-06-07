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
- [Typography](#typography)
- [Typography.Heading](#typographyheading)
- [Typography.Paragraph](#typographyparagraph)
- [TabList](#tablist)
- [Link](#link)
- [Table](#table)
- [Table.Body](#tablebody)
- [Table.Head](#tablehead)
- [Table.Header](#tableheader)
- [Table.Foot](#tablefoot)
- [Table.Cell](#tablecell)
- [Table.Row](#tablerow)
- [ProgressBar](#progressbar)
- [NavigationBar](#navigationbar)

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


#### NavigationBar

Description: A navigation bar which supports nested dropdowns.

`NavigationBarProps`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `data`              | `NavigationData[]`                 |         |    yes     | 
| `onEnterLinkFunction`              | `(href: string) => void`                 |         |        no | 
| `ariaLabel`              | `string`                 |         |     yes    | 
| `id`              | `string`                 |         |      no   | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``           | ``                    |         |         | 
| ``             | ``                   |         |       |  

`NavigationData`

| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `parentId`              | `null, number`                 |         |  yes       | 
| `id`              | `number`                 |         |      yes   | 
| `linkName`              | `string`                 |         |   yes      | 
| `linkHref`              | `string`                 |         |     no    | 
| `children`              | `NavigationData[]`                 |         | no        | 
| `hasSeparator`              | `boolean`                 |         |       no  | 



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
