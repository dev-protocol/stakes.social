module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
    '^src/(.+)': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  transformIgnorePatterns: ['/node_modules/(?!react-markdown)/'],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./jest.setup.regenerator-runtime.js']
}
