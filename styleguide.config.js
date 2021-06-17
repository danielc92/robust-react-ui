const path = require('path');
const glob = require('glob');

module.exports = {
  title: "Daniel Corcoran's React UI Library",
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
      codeBackground: '#f5f5f5',
      sidebarBackground: '#f8f8f8',
      ribbonBackground: '#e90',
      ribbonText: '#fff',
      // Based on default Prism theme
      // codeBase: '#333',
      // codeComment: '#6d6d6d',
      // codePunctuation: '#999',
      // codeProperty: '#905',
      // codeDeleted: '#905',
      // codeString: '#690',
      // codeInserted: '#690',
      // codeOperator: '#9a6e3a',
      // codeKeyword: '#1673b1',
      // codeFunction: '#DD4A68',
      // codeVariable: '#e90',
    },
  },
  // components() {
  //   return glob
  //     .sync(path.resolve(__dirname, 'src/**/*.tsx'))
  //     .filter((module) => /\/[A-Z]\w*\.tsx$/.test(module));
  //   },
  sections: [
    {
      name: 'Components',
      components: [
        'src/components/Icon/Base/**/*.tsx',
        'src/components/Alert/**/*.tsx',
        'src/components/AlertDialogue/**/*.tsx',
        'src/components/AutoComplete/**/*.tsx',
        'src/components/Breadcrumbs/**/*.tsx',
        'src/components/Button/**/*.tsx',
        'src/components/Carousel/**/*.tsx',
        'src/components/Image/**/*.tsx',
        'src/components/Link/**/*.tsx',
        'src/components/NavigationBar/**/*.tsx',
        'src/components/Pagination/**/*.tsx',
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
