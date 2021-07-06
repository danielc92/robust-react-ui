const path = require('path');
const glob = require('glob');
const package = require('./package.json');

module.exports = {
  title: 'Robust React UI | React, Typescript, HTML and CSS components',
  template: {
    head: {
      links: [
        {
          rel: 'canonical',
          href: 'https://robust-react-ui.netlify.app/',
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Robust React UI is a collection of resusable, accessible, functional and extensible web components built with Typescript, Javascript HTML and CSS',
        },
        {
          name: 'keywords',
          content:
            'ReactJs, React, Typescript, Javascript, HTML, CSS, SCSS, Components, Storybook, Styleguidist, Reusable, Robust, Function',
        },
      ],
    },
  },
  version: package.version,
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: false,
  theme: {
    color: {
      base: '#333',
      light: '#767676',
      lightest: '#ccc',
      link: '#5b31e6',
      linkHover: '#5b31e680',
      focus: 'rgba(22, 115, 177, 0.25)',
      border: '#e8e8e8',
      name: '#690',
      type: '#905',
      error: '#c00',
      baseBackground: '#fff',
      sidebarBackground: '#f8f8f8',
      ribbonBackground: '#e90',
      ribbonText: '#fff',
      // Based on default Prism theme
      codeBackground: '#2F302D',
      // codeComment: '#6d6d6d',
      // codePunctuation: '#999',
      // codeProperty: '#905',
      // codeDeleted: '#905',
      // codeString: 'red',
      // codeInserted: 'blue',
      // codeOperator: '#9a6e3a',
      // codeKeyword: '#1673b1',
      // codeFunction: '#DD4A68',
      // codeVariable: '#e90',
    },
  },
  sections: [
    {
      name: 'Robust React UI Docs',

      sections: [
        {
          name: 'Introduction',
          content: 'src/docs/introduction.md',
        },
        {
          name: 'Quick Start',
          content: 'src/docs/quick-start.md',
        },
        {
          name: 'How to use code splitting',
          content: 'src/docs/how-to-code-splitting.md',
        },
        {
          name: 'How to access Typescript types',
          content: 'src/docs/accessing-typescript-interfaces.md',
        },
      ],
    },
    {
      name: 'Components',
      components: [
        'src/components/Alert/**/*.tsx',
        'src/components/AlertDialogue/**/*.tsx',
        'src/components/AutoComplete/**/*.tsx',
        'src/components/Breadcrumbs/**/*.tsx',
        'src/components/Button/**/*.tsx',
        'src/components/Carousel/**/*.tsx',
        'src/components/Icon/Base/**/*.tsx',
        'src/components/Image/**/*.tsx',
        'src/components/Link/**/*.tsx',
        'src/components/NavigationBar/**/*.tsx',
        'src/components/Pagination/**/*.tsx',
        'src/components/ProgressBar/**/*.tsx',
        'src/components/Review/**/*.tsx',
        'src/components/TabList/**/*.tsx',
      ],
    },
    {
      name: 'Accordion',
      components: 'src/components/Accordion/**/*.tsx',
    },
    {
      name: 'Form',
      components: 'src/components/Form/**/*.tsx',
    },
    {
      name: 'Landmark',
      components: 'src/components/Landmark/**/*.tsx',
    },
    {
      name: 'Layout',
      components: 'src/components/Layout/**/*.tsx',
    },
    {
      name: 'Table',
      components: 'src/components/Table/**/*.tsx',
    },
    {
      name: 'Typography',
      components: 'src/components/Typography/**/*.tsx',
    },
  ],
  require: [path.join(__dirname, 'styleguide-assets/overrides.scss')],
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.webpack.json',
    {
      skipChildrenPropWithoutDoc: false,
      savePropValueAsString: true,
    }
  ).parse,
  ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
  // Todo: https://react-styleguidist.js.org/docs/configuration/#modulealiases
};
