import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};

export default config;
