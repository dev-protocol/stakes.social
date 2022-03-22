module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
    '^src/(.+)': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
    'nft.storage': '<rootDir>/src/__mocks__/nft.storage.ts'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  transformIgnorePatterns: ['/node_modules/(?!react-markdown)/'],
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs'
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          }
        }
      }
    ]
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./jest.setup.regenerator-runtime.js']
}
