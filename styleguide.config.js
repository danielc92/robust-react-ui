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
        name: "Form",
        components: "src/components/Form/**/*.tsx"
      },
      {
        name:"Typography",
        components: "src/components/Typography/**/*.tsx"
      },
      {
        name:"Layout",
        components: "src/components/Layout/**/*.tsx"
      },
      {
        name:"Accordion",
        components: "src/components/Accordion/**/*.tsx"
      },      
      {
        name:"Table",
        components: "src/components/Table/**/*.tsx"
      },
      {
        name: "Core",
        components: [
          "src/components/Image/**/*.tsx",
          "src/components/Link/**/*.tsx",
          "src/components/Carousel/**/*.tsx",
          "src/components/Alert/**/*.tsx",
          "src/components/AlertDialogue/**/*.tsx",
          "src/components/Pagination/**/*.tsx",
        ]
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
