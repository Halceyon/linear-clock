import { defineConfig } from 'cypress';
import installLogsPrinter from 'cypress-terminal-report/src/installLogsPrinter';

export default defineConfig({
  projectId: 'giszxa',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:9080',
    fixturesFolder: 'src/test/data',
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 6000,
    screenshotOnRunFailure: true,
    setupNodeEvents(on) {
      installLogsPrinter(on);
    },
    env: {
      CYPRESS_TEST_USER: 'marvin@codehq.co.za',
      CYPRESS_TEST_PASSWORD: 'P@ssw0rd2024'
    }
  }
});
