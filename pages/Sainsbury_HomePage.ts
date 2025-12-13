import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  loginHover = "//a[@data-id='loginForm']//span";
  groceriesAccount = "//a[normalize-space()='Groceries account']";
  acceptCookiesBtn = "#onetrust-accept-btn-handler";

  async navigate() {
    await this.page.goto('https://www.sainsburys.co.uk/');
  }

  async acceptCookiesIfPresent() {
  const btn = this.page.locator(this.acceptCookiesBtn);
  if (await btn.isVisible({ timeout: 5000 })) {
    await btn.click();
    await this.page.waitForTimeout(1000); // allow overlay animation to finish
  }
}
async goToGroceryLogin() {
  await this.page.goto('https://www.sainsburys.co.uk/gol-ui/oauth/login');
}
}
