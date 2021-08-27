module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
    '^src/(.+)': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./jest.setup.regenerator-runtime.js']
}
