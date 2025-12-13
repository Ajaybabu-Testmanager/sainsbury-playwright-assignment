import { test } from '@playwright/test';
import 'dotenv/config';
import { HomePage } from '../pages/Sainsbury_HomePage';
//import HomePage from '../pages/Sainsbury_HomePage';
import { LoginPage } from '../pages/Sainsbury_LoginPage';

test.use({
  headless: false,
  viewport: { width: 1920, height: 1080 }
});

test('Sainsbury Grocery Login', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.navigate();
  await home.acceptCookiesIfPresent();
  await home.goToGroceryLogin();

  await login.login(
    process.env.SB_USERNAME!,
    process.env.SB_PASSWORD!
  );

  await login.verifyLoginSuccess();

  await page.waitForTimeout(5000);
});
