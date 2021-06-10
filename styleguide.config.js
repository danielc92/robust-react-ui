const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'DCUI REACT LIBRARY',
  components() {
    return glob
      .sync(path.resolve(__dirname, 'src/**/*.tsx'))
      .filter((module) => /\/[A-Z]\w*\.tsx$/.test(module));
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.styleguide.json',
    [{ skipPropsWithoutDoc: true }]
  ).parse,
};
