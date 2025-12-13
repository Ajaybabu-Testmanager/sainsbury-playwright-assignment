import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  }
});