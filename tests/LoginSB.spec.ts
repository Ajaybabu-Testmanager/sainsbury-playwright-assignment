import { test, expect } from '@playwright/test';

test.use({
  headless: false,
  viewport: { width: 120, height: 1080 }
});

test('navigate to Sainsbury website', async ({ page }) => {

  await page.goto('https://www.sainsburys.co.uk/');
  await expect(page).toHaveTitle(/Sainsbury's/);

  const acceptButton = page.locator('#onetrust-accept-btn-handler');
  if (await acceptButton.isVisible({ timeout: 5000 })) {
    await acceptButton.click();
  }

  await page.hover("//a[@data-id='loginForm']//span");
  await page.click("//a[normalize-space()='Groceries account']");

  await page.waitForTimeout(5000);
});
