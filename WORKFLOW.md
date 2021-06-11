# Workflow

Important information about the development workflow.

## Node

Install node version 14 LTS. Preferably through NVM.

## Linting

Linting will be in place to ensure a higher level of code quality across the project. The Airbnb styleguide has been adopted in this project.
Additional configurations are found in;

- .eslintrc.json
- .prettierrc

### Extensions

The following VSCode extensions also need to be installed.

- `dbaeumer.vscode-eslint` (linter for react/typescript)
- `stylelint.vscode-stylelint` (linter for scss)

### Available commands

Linting scss files can be done with the following command:
`npm run stylelint-fix`

### Creating new components

There is a command available to generate new components.

`npm run generate componentName`

This command will create a new folder with the component name and;

- Create a .scss file
- Create a .stories.tsx file
- Create a .test.tsx file
- Create a .tsx file
- Create a .types.ts file
- Create an entry index.ts file

After running the above command, for the build to pass, the component must also be import/exported from `src/index.ts` and added to the `input` array in `rollup.config.js`

### Splitting

For the sake of orgsanisation, if a component has multiple compound components. The underlying folder structure can be as follow;
```
index.ts
- Base (e.g. Table)
- CompoundComponent1 (e.g. Row)
- CompoundComponent2 (e.g. Cell)
- CompoundComponent3 (e.g. TBody)
- ...
```

## Typescript

All components will have defined types/interfaces, through Typescript, this will allow users to figure out how to use components more efficiently. Typing components will provide automatic documentation at the very least. React is the most mature and relied upon front end library to date, and has great integration with Typescript.

## Storybook

Each component to have its own story, or set of stories in Storybook. This will allow users to get a visual representation of each component, as well as being able to interact with props, without the need for coding upfront. Additionally, Storybook addons such as **a11y-addon** can be used to apply a level of automated accessibility testing.

## Styleguidist

[React Styleguidist](https://react-styleguidist.js.org/) will be used in order to properly document the project's components in an efficient and streamline manner. 

Example of documentation for interfaces:
```
export interface Person {
    /**
    * A description for name
    * @default Daniel
    * /
    name: string | undefined | null
}
```

Example of documentation for components:
*in Button.md (ignoring the # marks)*
```
#```jsx
<Button>Click me</Button>
#```
```

### Running the styleguidist server locally

First copy the right tsconfig into main.

`npm run tsconfig-cp:webpack`

Then run the styleguidist server.

`npm run styleguidist server`

### Commands

To start storybook server locally run.
`npm run storybook`

## Testing

### Strategy

At a high level, a combination of [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) will be used to test components functionality.

Unit tests will be used quite heavily in this project to provide a sense of security, improve code quality and reduce time spent on defects. It will also be applied in the CI pipeline (github actions) targetting `main` and `develop` branches.

### Guidelines

There are no strict guidelines on testing within this project. However listed below are areas or specific things which can be tested against;

- Does the correct class render?
- Does the correct id render?
- Does the correct class render under the right circumstances (active/inactive states)?
- Does the component contain the right text?
- Does the component contain the right aria roles?
- Does the component contain the right attributes?
- Does the component render the correct amount of nodes when passed dynamic data (e.g table rows or button groups)
- Does the component meet basic accessibility (this is tested in Storybook addon/a11y)

### Configuration

Configuration for test resides in `jest.config.js`

### Command

`npm run test`

Alternatively, you can run in watch mode.

`npm run test:watch`
## Building

Before you build you must copy the right tsconfig into `tsconfig.json`

`npm run tsconfig-cp:build`

This project is consolidated using [Rollup.js](https://rollupjs.org/guide/en/)
The project can be built with:
`npm run build`
Configuration relating to this build resides in `rollup.config.js`
