# Daniel Corcoran's React UI Library 🐲

The goal is provide a react library of components, which are robust, extensible and meet general accessibility guidelines. This project is currently **not published** on npm.

## Getting started

TBD.

## Documentation

### Components
- [Accordion](####accordion)
- [Accordion.Panel](####accordion.panel)
- [Typography](####typography)
- [Typography.Heading](####typography.heading)
- [Typography.Paragraph](####typography.paragraph)
- [TabList](####tablist)
- [ProgressBar](####progressbar)

#### Typography
Description: Base component for typography.
Props (`TypographyProps`)
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         |yes         | 

#### Typography.Paragraph
Description: Compound paragraph component for typography.
Props (`ParagraphProps`)
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `children`              | `ReactNode`                 |         | yes       | 
| `id`              | `string`                 |         |         no| 
| `bolded`              | `boolean`                 |         |      no   | 
| `size`              | `'small' \| 'medium' \| 'large'`                 |         |no         | 


#### Accordion
Description: Base component for Accordion.
Props:
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|----------|
| `children`              | `ReactNode`                 |         | yes        | 
| `activePanel`           | `string`                    |         | yes        | 
| `fullWidth`             | `boolean`                   |         | no        |  
| `onSelectPanelFunction` | `(panelId: string) => void` |         | yes        |  

#### Accordion.Panel
Description: A compound component for the Accordion.
Props (`AccordionProps`)
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|----------|
| `children`              | `ReactNode`                 |         | yes        | 
| `panelTitle`           | `string`                    |         | yes        | 
| `panelId`             | `string`                   |         | yes      |  

#### TabList
Description: Tab list component.
Props: 
(`TabListProps`)
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `ariaLabel`              | `string`                 |         |         no| 
| `variant`              | `'primary' | 'danger' | 'success' | 'secondary'`                 |         |    no     | 
| `tabs`              | `Array<TabListTab>`                 |         |     yes    | 
| `fullWidth`              | `boolean`                 |         |         no| 

(`TabListTab`)
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `tabId`              | `string`                 |         |         yes| 
| `buttonLabel`              | `string`                 |         |    yes     | 
| `buttonId`              | `string`                 |         |     yes    | 
| `tabContent`              | `string | ReactNode`                 |         |         yes| 

  minimumValue?: number;
  maximumValue?: number;
  currentValue: number;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'success';

#### ProgressBar
Description: -
Props (`ProgressBarProps`):
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| `minimumValue`              | `number`                 |         |      no   | 
| `maximumValue`              | `number`                 |         |        no | 
| `currentValue`              | `number`                 |         |         yes| 
| `fullWidth`              | `boolean`                 |         |         no| 
| `size`              | `'small' | 'medium' | 'large'`                 |         |         no| 
| `variant`              | `'primary' | 'secondary' | 'danger' | 'success'`                 |         |       no  | 

#### NAME
Description: -
Props:
| name                  | type                      | purpose | required | 
|-----------------------|---------------------------|---------|---|
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``              | ``                 |         |         | 
| ``           | ``                    |         |         | 
| ``             | ``                   |         |       |  


## Storybook
Click the [following link](https://develop--60b75a95d763ec0039b4429c.chromatic.com/) to see the latest `develop` branch.

## CI

![maintest](https://github.com/danielc92/dc-react-ui/actions/workflows/main-test.yml/badge.svg) ![mainbuild](https://github.com/danielc92/dc-react-ui/actions/workflows/main-build.yml/badge.svg)
![devtest](https://github.com/danielc92/dc-react-ui/actions/workflows/develop-test.yml/badge.svg) ![devbuild](https://github.com/danielc92/dc-react-ui/actions/workflows/develop-build.yml/badge.svg)

## Maintainers

- [Daniel Corcoran](https://github.com/danielc92)

## Looking to contribute?

If you want to contribute, feel free to send me a message.

## Components

```
├───Accordion
│   ├───Base     
│   └───Panel    
├───Alert        
├───AlertDialogue
├───AutoComplete 
├───Breadcrumbs  
├───Button       
├───Form
│   ├───Base
│   ├───CheckboxGroup
│   ├───FieldSet
│   ├───Input
│   ├───Label
│   ├───Legend
│   ├───Select
│   ├───Submit
│   └───TextArea
├───Image
├───Landmark
│   ├───Base
│   ├───Complementary
│   ├───ContentInfo
│   ├───Main
│   └───Region
├───Layout
│   ├───Base
│   ├───Column
│   ├───Container
│   └───Row
├───Link
├───NavigationBar
├───Pagination
├───ProgressBar
├───Table
│   ├───Base
│   ├───Body
│   ├───Cell
│   ├───Foot
│   ├───Head
│   ├───Header
│   └───Row
├───TabList
└───Typography
    ├───Base
    ├───Heading
    └───Paragraph

```

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
