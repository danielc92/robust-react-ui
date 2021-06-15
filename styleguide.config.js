const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Daniel Corcoran\'s React UI Library',
  // components() {
  //   return glob
  //     .sync(path.resolve(__dirname, 'src/**/*.tsx'))
  //     .filter((module) => /\/[A-Z]\w*\.tsx$/.test(module));
  //   },
    sections: [
      {
        name: "Components",
        components: [
          "src/components/Alert/**/*.tsx",
          "src/components/AlertDialogue/**/*.tsx",
          "src/components/AutoComplete/**/*.tsx",
          "src/components/Breadcrumbs/**/*.tsx",
          "src/components/Button/**/*.tsx",
          "src/components/Carousel/**/*.tsx",
          "src/components/Image/**/*.tsx",
          "src/components/Link/**/*.tsx",
          "src/components/Pagination/**/*.tsx",
          "src/components/TabList/**/*.tsx",
        ]
      },
      {
        name:"Accordion",
        components: "src/components/Accordion/**/*.tsx"
      },    
      {
        name: "Form",
        components: "src/components/Form/**/*.tsx"
      },
      {
        name:"Landmark",
        components: "src/components/Landmark/**/*.tsx"
      },
      {
        name:"Layout",
        components: "src/components/Layout/**/*.tsx"
      },
      {
        name:"Table",
        components: "src/components/Table/**/*.tsx"
      },
      {
        name:"Typography",
        components: "src/components/Typography/**/*.tsx"
      },
      
    ],
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.webpack.json',
   {
    skipChildrenPropWithoutDoc:false,
    savePropValueAsString: true
   }
  ).parse,
  ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
  // Todo: https://react-styleguidist.js.org/docs/configuration/#modulealiases
};
