module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/test/**/?(*.)test.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}