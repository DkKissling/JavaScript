const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run dev',
    port: 5173,
  },
  use: {
    baseURL: 'http://localhost:5173',
    browserName: 'chromium',
  },
});

