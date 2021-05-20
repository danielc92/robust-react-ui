# Workflow

Important information about the development workflow.

## Linting

Linting will be in place to ensure a higher level of code quality across the project.
The configurations are found in;

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

## Typescript

All components will have defined types/interfaces, through Typescript, this will allow users to figure out how to use components more efficiently. Typing components will provide automatic documentation at the very least. React is the most mature and relied upon front end library to date, and has great integration with Typescript.

## Storybook

Each component to have its own story, or set of stories in Storybook. This will allow users to get a visual representation of each component, as well as being able to interact with props, without the need for coding upfront. Additionally, Storybook addons such as **a11y-addon** can be used to apply a level of automated accessibility testing.

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

## Building

This project is consolidated using [Rollup.js](https://rollupjs.org/guide/en/)
The project can be built with:
`npm run build`
Configuration relating to this build resides in `rollup.config.js`
