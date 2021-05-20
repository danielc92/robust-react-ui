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

## Storybook

Storybook can be used as an environment to view components in insolation, without importing them into a web app. It also hosts a bunch of useful addons, that can be used to do things such as test accessibility, view component states and more.

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
