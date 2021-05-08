# DANS REACT UI LIBRARY 🐲

# Architecture

### Accessibility

This is a very important area of front end development, which is more than often overlooked, yet is also extremely difficult to achieve. ARIA 1.1 level design patterns will be referenced **religiously** from [the following guide](https://www.w3.org/TR/wai-aria-practices/examples/) for this particular endevour.

### CSS

SCSS will be used in order to reduce the amount of duplicate CSS. Native CSS variables will also be used, in order to further reduce duplication and allow an avenue in which users can extend/modify CSS on a component level.

### React and Typescript

All components will have defined types/interfaces, through Typescript, this will allow users to figure out how to use components more efficiently. Typing components will provide automatic documentation at the very least. React is the most mature and relied upon front end library to date, and has great integration with Typescript.

### Storybook

Each component to have its own story, or set of stories in Storybook. This will allow users to get a visual representation of each component, as well as being able to interact with props, without the need for coding upfront. Additionally, Storybook addons such as **a11y-addon** can be used to apply a level of automated accessibility testing.

### Code splitting

Code splitting will be available such that components can imported in isolation, thus reducing bundle sizes.

### Tested

Unit tests to cover each component. Potentially with Jest.

### Well documented

- Each component usage, props and types to be documentated
- How to override styles
- How to install and import components

# Components

The goal is to keep components names, behaviour, html structure, and js logic as close to the ARIA guidelines as possible. Some general guidelines will be followed;

- Keep it simple
- Use native html elements whenever possible, as opposed to enforcing role attributes on `<div>` elements.

## In progress/built

- Landmark
  - Landmark.Main
  - Landmark.Region
  - Landmark.Complementary
  - Landmark.ContentInfo
- Button
- Table
  - Table.Row
  - Table.Cell
  - Table.Head
  - Table.Header
  - Table.Foot
- AlertDialogue (modal)
- Form
  - Form.FieldSet
  - Form.Legend
  - Form.Label
  - Form.Input
  - Form.TextArea
  - Form.Select
  - Form.CheckboxGroup
- Typography
  - Paragraph
  - Heading

## Of interest

- Menu (high priority)
  - Menu.Item
- Feed
  - Feed.Article
- ProgressBar (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
- Search (medium-high priority)

# Base repo

The base repo forked [from here](https://blog.harveydelaney.com/creating-your-own-react-component-library/). This repo includes a React/Typescript/Storybook component library pre-configured and ready to go. Credits to **Harvey Delaney**
