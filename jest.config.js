const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest'
};
