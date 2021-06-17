const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  roots: ['src'],
  collectCoverage: true,
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
