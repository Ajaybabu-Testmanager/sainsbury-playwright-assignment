import { test, expect } from '@playwright/test';

test.use({ headless: false });

test('navigate to Sainsbury website', async ({ page }) => {
  await page.goto('https://www.sainsburys.co.uk/');
  await expect(page).toHaveTitle(/Sainsbury's/);
   const acceptButton = page.locator('button#accept-all');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
  await page.hover("//a[@data-id='loginForm']//span");
  await page.click("//a[normalize-space(text())='Groceries account']");
});
