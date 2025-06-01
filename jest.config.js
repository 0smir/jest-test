export default {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}