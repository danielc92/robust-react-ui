const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'React Style Guide Example',
  //   components() {
  //     return glob
  //       .sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
  //       .filter((module) => /\/[A-Z]\w*\.tsx$/.test(module));
  //   },
  components: 'src/components/**/[A-Z]*.tsx',
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
};
