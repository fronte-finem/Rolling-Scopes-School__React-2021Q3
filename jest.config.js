const FONT = '\\.(eot|otf|ttf|woff|woff2)$';
const IMAGE = '\\.(jpg|jpeg|png|gif|webp|svg)$';
const VIDEO = '\\.(mp4|webm)$';
const AUDIO = '\\.(wav|mp3|m4a|aac|oga)$';
const STYLE = '\\.(css|pcss|styl|less|sass|scss)$';
const QUERY = '\\.(gql|graphql)$';
const FILE_MOCK = '<rootDir>/tests-mocks/file-mock.js';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    ENV_IS_PROD: false,
    ENV_PUBLIC_URL: '/',
    ENV_TITLE: 'test',
  },
  roots: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    [FONT]: FILE_MOCK,
    [IMAGE]: FILE_MOCK,
    [VIDEO]: FILE_MOCK,
    [AUDIO]: FILE_MOCK,
    [STYLE]: 'identity-obj-proxy',
  },
  transform: {
    [QUERY]: 'jest-transform-graphql',
  },
  coverageDirectory: '<rootDir>/tests-coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests-coverage/',
    '<rootDir>/tests-mocks/',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
