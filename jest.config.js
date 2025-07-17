module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(?!@testing-library)'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
};
