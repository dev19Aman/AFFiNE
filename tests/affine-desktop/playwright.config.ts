import { testResultDir } from '@affine-test/kit/playwright';
import type { PlaywrightTestConfig } from '@playwright/test';
// import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './e2e',
  fullyParallel: true,
  timeout: process.env.CI ? 50_000 : 30_000,
  outputDir: testResultDir,
  use: {
    viewport: { width: 1440, height: 800 },
  },
};

if (process.env.CI) {
  config.retries = 3;
  config.workers = '50%';
}

export default config;
