const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Daniel Corcoran\'s React UI Library',
  components() {
    return glob
      .sync(path.resolve(__dirname, 'src/**/*.tsx'))
      .filter((module) => /\/[A-Z]\w*\.tsx$/.test(module));
    },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.webpack.json',
   {
    skipChildrenPropWithoutDoc:false,
    savePropValueAsString: true
   }
  ).parse,
  ignore: ['**/*.test.tsx'],
  // Todo: https://react-styleguidist.js.org/docs/configuration/#modulealiases
};
