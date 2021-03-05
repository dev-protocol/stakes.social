module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^src/(.+)': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./jest.setup.regenerator-runtime.js']
}
